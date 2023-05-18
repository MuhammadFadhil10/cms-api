import express from "express";

import {
  createPage,
  findPage,
  updatePage,
  deletePage,
  deleteBulkPage,
} from "@/api/controllers";

const router = express.Router();

router.post("/pages", createPage);
router.get("/pages/:webId", findPage);
router.patch("/pages/:id", updatePage);
router.delete("/pages/:id", deletePage);
router.delete("/pages", deleteBulkPage);

export default router;
