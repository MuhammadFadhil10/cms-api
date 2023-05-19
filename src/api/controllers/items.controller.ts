import { Request, Response } from "express";
import ItemsModels from "../models/items.models.ts";
import { Item } from "@/types";

export const createItem = async (req: Request, res: Response) => {
  try {
    const { name, type, pageId, properties }: Item = req.body;

    await ItemsModels.insertOne({
      name,
      type,
      pageId,
      properties,
      isLocked: false,
      isVisible: false,
    });

    return res.status(200).json({ data: null, message: "Item created" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const findItem = async (req: Request, res: Response) => {
  try {
    const { pageId, webId } = req.query;
    let items: Item[];

    if (!pageId && !webId) {
      return res.status(400).json({
        data: null,
        message: "Bad request: need one of two query (pageId / webId)",
      });
    }

    if (pageId) {
      items = (await ItemsModels.findByPageId(
        pageId as string,
      )) as unknown as Item[];

      return res.status(200).json({ data: items, message: "" });
    }

    items = (await ItemsModels.findByWebId(
      webId as string,
    )) as unknown as Item[];

    return res.status(200).json({ data: items, message: "" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

// not tested yet

/*
    -update one
    -update bulk
    -delete one
    -delete bulk by item id
*/

export const updateItem = async (req: Request, res: Response) => {
  try {
    const body: Partial<Item> = req.body;
    const { id } = req.params;

    await ItemsModels.updateOne(id, body);

    return res.status(200).json({ data: null, message: "Item updated" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const updateBulkItem = async (req: Request, res: Response) => {
  try {
    const { ids, body } = req.body;

    await ItemsModels.updateBulk(ids, body);

    return res.status(200).json({ data: null, message: "Items updated" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await ItemsModels.deleteOne(id);

    return res.status(200).json({ data: null, message: "Item deleted" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};

export const deleteBulkItem = async (req: Request, res: Response) => {
  try {
    const { ids } = req.body;

    await ItemsModels.deleteBulkById(ids);

    return res.status(200).json({ data: null, message: "Item deleted" });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ data: null, message: "Internal server error" });
  }
};
