import { DbCollections } from "@/db";
import { User } from "@/types";

const user = DbCollections.users;

export default class UserModel {
  static async insertOne(data: User) {
    return await user.insertOne(data);
  }

  static async findOne(filter: Partial<User>) {
    return await user.findOne(filter);
  }
}
