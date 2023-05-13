import { Request, Response, NextFunction } from "express";

import userRouter from "./users.routes.ts";

const router = (req: Request, res: Response, next: NextFunction) => {
  userRouter(req, res, next);
};

export default router;
