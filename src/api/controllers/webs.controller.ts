import { Request, Response } from "express";
import { Web, WebFilterQueryParams } from "@/types";
import { getWebFilterParams } from "./utils";
import WebsModels from "../models/webs.models";

export const createWeb = async (req: Request, res: Response) => {
  try {
    const { name, userId }: Web = req.body;

    await WebsModels.insertOne({ name, userId, sharedUserId: [] });

    return res.status(200).json({ data: null, message: "Web created" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const findWeb = async (req: Request, res: Response) => {
  try {
    const filter = getWebFilterParams(
      req.query as unknown as WebFilterQueryParams,
    );

    const webs = await WebsModels.find(filter);

    return res.status(200).json({ data: webs, message: "" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const updateWeb = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { id } = req.params;

    await WebsModels.updateOne(id, body);

    return res.status(200).json({ data: null, message: "Web updated" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const deleteWeb = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await WebsModels.deleteOne(id);

    return res.status(200).json({ data: null, message: "Web deleted" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const deleteBulkWeb = async (req: Request, res: Response) => {
  try {
    const webIds: string[] = req.body.webIds;

    await WebsModels.deleteMany(webIds);

    return res.status(200).json({ data: null, message: "Webs deleted" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};
