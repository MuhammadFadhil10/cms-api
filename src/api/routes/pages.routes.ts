import express from "express";

import authMiddleware from "@/api/middleware/auth.middleware";
import {
  createPage,
  findPage,
  updatePage,
  deletePage,
  deleteBulkPage,
} from "@/api/controllers";

const router = express.Router();

router.post("/pages", authMiddleware, createPage);
router.get("/pages/:webId", authMiddleware, findPage);
router.patch("/pages/:id", authMiddleware, updatePage);
router.delete("/pages/:id", authMiddleware, deletePage);
router.delete("/pages", authMiddleware, deleteBulkPage);

export default router;
