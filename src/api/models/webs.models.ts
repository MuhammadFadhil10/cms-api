import { DbCollections, toObjectId } from "@/db";
import { Web, WebPage } from "@/types";
import { Filter, Document } from "mongodb";
import PagesModels from "./pages.models";

const web = DbCollections.webs;

export default class WebsModels {
  static async insertOne(data: Web) {
    const createdWeb = await web.insertOne(data);

    const initPage: WebPage = {
      name: "Page 1",
      isMain: true,
      webId: createdWeb.insertedId.toString(),
      style: {
        backgroundColor: "white",
      },
    };

    await PagesModels.insertOne(initPage);

    return createdWeb;
  }

  static async findById(id: string) {
    return await web.findOne({ _id: toObjectId(id) });
  }

  static async find(filter?: Filter<Document>) {
    return web.find(filter as Filter<Document>).toArray();
  }

  static async updateOne(id: string, body: Partial<Web>) {
    return await web.updateOne({ _id: toObjectId(id) }, { $set: body });
  }

  static async deleteOne(id: string) {
    const webPages = await PagesModels.find({ webId: id });
    const pageIds: string[] = webPages.map((page) => page._id.toString());

    await PagesModels.deleteBulkById(pageIds);
    const deletedWeb = await web.deleteOne({ _id: toObjectId(id) });

    return deletedWeb;
  }

  static async deleteMany(ids: string[]) {
    const objectIds = ids.map((id) => toObjectId(id));
    const pagesRelated = await PagesModels.find({
      webId: { $in: ids },
    });
    const pageIds = pagesRelated.map((page) => page._id.toString());

    await PagesModels.deleteBulkById(pageIds);
    const deleteBulkWebResult = await web.deleteMany({
      _id: { $in: objectIds },
    });

    return deleteBulkWebResult;
  }
}
