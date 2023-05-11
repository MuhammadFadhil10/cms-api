import { DbCollections } from "@/db";

const user = DbCollections.users;

export class User {
  static async insertOne() {
    await user.insertOne({ name: "Fadhil" });
  }
}
