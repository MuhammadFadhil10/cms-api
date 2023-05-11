import { Db } from "./config.ts";

const dbInstance = new Db();
export const test = new Db().dbClient.collection("users");
export class DbCollections {
  static users = dbInstance.dbClient.collection("users");
  static webs = dbInstance.dbClient.collection("webs");
  static pages = dbInstance.dbClient.collection("pages");
  static items = dbInstance.dbClient.collection("items");
  static themes = dbInstance.dbClient.collection("themes");
}
