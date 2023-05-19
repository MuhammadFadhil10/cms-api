import { Request, Response } from "express";
import PagesModels from "../models/pages.models.ts";
import { WebPage } from "@/types";

export const createPage = async (req: Request, res: Response) => {
  try {
    const { name, webId, isMain, queryParams, style }: WebPage = req.body;

    await PagesModels.insertOne({
      name,
      webId,
      isMain,
      queryParams: queryParams ?? [],
      style: style ?? { backgroundColor: "white" },
    });

    return res.status(200).json({ data: null, message: "Page created" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const findPage = async (req: Request, res: Response) => {
  try {
    const { webId } = req.params;

    const pages = await PagesModels.find({ webId });

    return res.status(200).json({ data: pages, message: "" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const updatePage = async (req: Request, res: Response) => {
  try {
    const body: Partial<WebPage> = req.body;
    const { id } = req.params;

    await PagesModels.updateOne(id, body);

    return res.status(200).json({ data: null, message: "Page updated" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const deletePage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await PagesModels.deleteOne(id);

    return res.status(200).json({ data: null, message: "Page deleted" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const deleteBulkPage = async (req: Request, res: Response) => {
  try {
    const ids: string[] = req.body.ids;

    await PagesModels.deleteBulkById(ids);

    return res.status(200).json({ data: null, message: "Pages deleted" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};
