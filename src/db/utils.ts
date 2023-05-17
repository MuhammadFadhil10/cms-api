import { ObjectId } from "mongodb";

export const toObjectId = (str: string) => {
  return ObjectId.createFromHexString(str);
};
