import { DbCollections, toObjectId } from "@/db";
import { Web } from "@/types";
import { Filter, Document } from "mongodb";

const web = DbCollections.webs;

export default class WebsModels {
  static async insertOne(data: Web) {
    return await web.insertOne(data);
  }

  static async findById(id: string) {
    return await web.findOne({ _id: toObjectId(id) });
  }

  static async find(filter?: Filter<Document>) {
    return web.find(filter as Filter<Document>).toArray();
  }

  static async deleteOne(id: string) {
    return await web.deleteOne({ _id: toObjectId(id) });
  }

  static async updateOne(id: string, body: Partial<Web>) {
    return await web.updateOne({ _id: toObjectId(id) }, { $set: body });
  }

  static async deleteMany(ids: string[]) {
    const objectIds = ids.map((id) => toObjectId(id));

    return await web.deleteMany({ _id: { $in: objectIds } });
  }
}
