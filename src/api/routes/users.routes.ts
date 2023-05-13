import express from "express";

const router = express.Router();

import { signup, signin } from "@/api/controllers";
import authMiddleware from "@/api/middleware/auth.middleware.ts";

router.post("/user/signup", signup);
router.post("/user/signin", signin);
router.get("/user/test-auth-middleware", authMiddleware);

export default router;
