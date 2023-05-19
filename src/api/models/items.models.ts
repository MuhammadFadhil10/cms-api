import { Filter, Document } from "mongodb";
import { DbCollections, toObjectId } from "@/db";
import { Item } from "@/types";
import PagesModels from "./pages.models";

const item = DbCollections.items;

export default class ItemsModels {
  static async insertOne(data: Item) {
    return await item.insertOne(data);
  }

  static async find(filter?: Filter<Document>) {
    return item.find(filter as Filter<Document>).toArray();
  }

  // item in one page
  static async findByPageId(pageId: string) {
    return item.find({ pageId }).toArray();
  }

  // item in entire web
  static async findByWebId(webId: string) {
    const webPages = await PagesModels.find({ webId });
    const pageIds = webPages.map((page) => page._id.toString());

    return item.find({ pageId: { $in: pageIds } }).toArray();
  }

  static async updateOne(id: string, body: Partial<Item>) {
    return await item.updateOne({ _id: toObjectId(id) }, { $set: body });
  }

  static async updateBulk(ids: string[], body: Partial<Item>) {
    const objectIds = ids.map((id) => toObjectId(id));

    return await item.updateMany({ _id: { $in: objectIds } }, { $set: body });
  }

  static async deleteOne(id: string) {
    return await item.deleteOne({ _id: toObjectId(id) });
  }

  static async deleteBulkById(ids: string[]) {
    const objectIds = ids.map((id) => toObjectId(id));

    return await item.deleteMany({ _id: { $in: objectIds } });
  }

  static async deleteBulkByPageId(pageIds: string[]) {
    return await item.deleteMany({ pageId: { $in: pageIds } });
  }
}
