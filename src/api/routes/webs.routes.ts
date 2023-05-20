import express from "express";

import authMiddleware from "@/api/middleware/auth.middleware.ts";
import {
  createWeb,
  deleteWeb,
  updateWeb,
  findWebs,
  findWebById,
  deleteBulkWeb,
} from "@/api/controllers";

const router = express.Router();

router.post("/webs", authMiddleware, createWeb);
router.get("/webs", authMiddleware, findWebs);
router.get("/web/:id", authMiddleware, findWebById);
router.patch("/webs/:id", authMiddleware, updateWeb);
router.delete("/webs/:id", authMiddleware, deleteWeb);
router.delete("/webs", authMiddleware, deleteBulkWeb);

export default router;
