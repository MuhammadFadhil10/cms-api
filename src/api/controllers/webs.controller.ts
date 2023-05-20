import { Request, Response } from "express";
import { ExtendedRequest, Web } from "@/types";
import WebsModels from "../models/webs.models";

export const createWeb = async (req: Request, res: Response) => {
  try {
    const { name }: Web = req.body;
    const { id: userId } = (req as ExtendedRequest).user;

    await WebsModels.insertOne({ name, userId, sharedUserId: [] });

    return res.status(200).json({ data: null, message: "Web created" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const findWebs = async (req: Request, res: Response) => {
  try {
    const { id: userId } = (req as ExtendedRequest).user;
    const webs = await WebsModels.find({ userId });

    return res.status(200).json({ data: webs, message: "" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const findWebById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const web = await WebsModels.findById(id);

    return res.status(200).json({ data: web, message: "" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const updateWeb = async (req: Request, res: Response) => {
  try {
    const body: Partial<Web> = req.body;
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
