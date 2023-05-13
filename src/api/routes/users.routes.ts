import express from "express";

const router = express.Router();

import { signup, signin } from "@/api/controllers";

router.post("/user/signup", signup);
router.post("/user/signin", signin);

export default router;
