import express from "express";

import authMiddleware from "@/api/middleware/auth.middleware.ts";
import {
  createWeb,
  deleteWeb,
  updateWeb,
  findWeb,
  deleteBulkWeb,
} from "@/api/controllers";

const router = express.Router();

router.post("/webs", authMiddleware, createWeb);
router.get("/webs", authMiddleware, findWeb);
router.patch("/webs/:id", authMiddleware, updateWeb);
router.delete("/webs/:id", authMiddleware, deleteWeb);
router.delete("/webs", authMiddleware, deleteBulkWeb);

export default router;
