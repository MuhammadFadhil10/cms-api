import "module-alias/register";

import type { Request, Response } from "express";

import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";
import { Db } from "@/db";

import router from "@/api/routes/router";

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

app.use(API_PREFIX, router);

app.listen(PORT, async () => {
  const db = new Db();

  await db.run();

  console.log("\n app listening on port: ", PORT, " 🚀🚀🚀");
});
