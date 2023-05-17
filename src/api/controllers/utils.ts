import { toObjectId } from "@/db";
import { WebFilterQueryParams } from "@/types";
import { Document, Filter } from "mongodb";

export const getWebFilterParams = ({
  id,
  userId,
  sharedUserId,
}: WebFilterQueryParams): Filter<Document> => {
  let filter: Filter<Document> = {};

  if (id) {
    filter = {
      ...filter,
      _id: toObjectId(id),
    };
  }
  if (userId) {
    filter = {
      ...filter,
      userId,
    };
  }
  if (sharedUserId) {
    filter = {
      ...filter,
      sharedUserId,
    };
  }

  return filter;
};
