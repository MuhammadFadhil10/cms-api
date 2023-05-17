import express from "express";

import {
  createWeb,
  deleteWeb,
  updateWeb,
  findWeb,
  deleteBulkWeb,
} from "@/api/controllers";

const router = express.Router();

router.post("/webs", createWeb);
router.get("/webs", findWeb);
router.patch("/webs/:id", updateWeb);
router.delete("/webs/:id", deleteWeb);
router.delete("/webs", deleteBulkWeb);

export default router;
