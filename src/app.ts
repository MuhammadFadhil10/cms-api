import "module-alias/register";

import type { Request, Response } from "express";

import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import { Db } from "@/db";

import pagesRouter from "@/api/routes/pages.routes.ts";
import userRouter from "@/api/routes/users.routes.ts";
import websRouter from "@/api/routes/webs.routes.ts";

// config
config();

// utils
const PORT = process.env.PORT;
const API_PREFIX = "/api/v1";

// server
const app = express();
app.use(bodyParser.json());

app.get(`${API_PREFIX}/test-server-run`, (req: Request, res: Response) => {
  res.send("Server run succesfully ");
});

app.use(API_PREFIX, pagesRouter);
app.use(API_PREFIX, userRouter);
app.use(API_PREFIX, websRouter);

app.listen(PORT, async () => {
  const db = new Db();

  await db.run();

  console.log("\n app listening on port: ", PORT, " 🚀🚀🚀");
});
