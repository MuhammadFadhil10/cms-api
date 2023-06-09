import { Filter, Document } from "mongodb";
import { DbCollections, toObjectId } from "@/db";
import { WebPage } from "@/types";
import ItemsModels from "./items.models";

const page = DbCollections.pages;

export default class PagesModels {
  static async insertOne(data: WebPage) {
    return await page.insertOne(data);
  }

  static async find(filter?: Filter<Document>) {
    return page.find(filter as Filter<Document>).toArray();
  }

  static async updateOne(id: string, body: Partial<WebPage>) {
    return await page.updateOne({ _id: toObjectId(id) }, { $set: body });
  }

  static async deleteOne(id: string) {
    await ItemsModels.deleteBulkByPageId([id]);

    return await page.deleteOne({ _id: toObjectId(id) });
  }

  static async deleteBulkById(ids: string[]) {
    const objectIds = ids.map((id) => toObjectId(id));

    await ItemsModels.deleteBulkByPageId(ids);

    return await page.deleteMany({ _id: { $in: objectIds } });
  }
}
