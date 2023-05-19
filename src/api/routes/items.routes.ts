import express from "express";

import {
  createItem,
  findItem,
  updateItem,
  updateBulkItem,
  deleteItem,
  deleteBulkItem,
} from "@/api/controllers";

const router = express.Router();

router.post("/items", createItem);
router.get("/items", findItem);
router.patch("/items/:id", updateItem);
router.patch("/items", updateBulkItem);
router.delete("/items/:id", deleteItem);
router.delete("/items", deleteBulkItem);

export default router;
