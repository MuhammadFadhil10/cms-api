import { ExtendedRequest } from "@/types";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

const authMiddleware = (
  req: ExtendedRequest | Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.header("authorization")?.split(" ")[1];

  if (!token)
    return res.status(401).json({ data: null, message: "Unauthorized" });

  const decodedToken = verify(token, process.env.JWT_SECRET as string);

  if (!decodedToken)
    return res.status(401).json({ data: null, message: "Unauthorized" });

  (req as ExtendedRequest).user = decodedToken;

  next();
};

export default authMiddleware;
