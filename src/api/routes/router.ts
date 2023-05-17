import express, { NextFunction, Request, Response } from "express";

import userRouter from "./users.routes.ts";
import websRouter from "./webs.routes.ts";

const router = express.Router();

const routerProvider = (req: Request, res: Response, next: NextFunction) => {
  router.use(() => userRouter(req, res, next));
  router.use(() => websRouter(req, res, next));

  return router;
};

export default routerProvider;
