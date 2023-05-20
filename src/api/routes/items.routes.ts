import express from "express";

import authMiddleware from "@/api/middleware/auth.middleware";
import {
  createItem,
  findItem,
  updateItem,
  updateBulkItem,
  deleteItem,
  deleteBulkItem,
} from "@/api/controllers";

const router = express.Router();

router.post("/items", authMiddleware, createItem);
router.get("/items", authMiddleware, findItem);
router.patch("/items/:id", authMiddleware, updateItem);
router.patch("/items", authMiddleware, updateBulkItem);
router.delete("/items/:id", authMiddleware, deleteItem);
router.delete("/items", authMiddleware, deleteBulkItem);

export default router;
