import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { Request, Response } from "express";

import UserModel from "@/api/models/users.models.ts";
import { User } from "@/types";

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password, name, profilePicture }: User = req.body;

    const userExist = await UserModel.findOne({ email });

    if (userExist)
      return res
        .status(409)
        .json({ data: null, message: "Email already exist!" });

    const hashedPassword = await hash(password, 12);

    await UserModel.insertOne({
      email,
      password: hashedPassword,
      name,
      profilePicture: profilePicture ?? "",
    });

    return res.status(200).json({ data: null, message: "User created" });
  } catch (error) {
    throw Error(error as string);
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const { email, password }: Partial<User> = req.body;

    const userExist = await UserModel.findOne({ email });

    if (!userExist)
      return res
        .status(401)
        .json({ data: null, message: "Email or Password wrong!" });

    const passwordMatch = await compare(password as string, userExist.password);

    if (!passwordMatch)
      return res
        .status(401)
        .json({ data: null, message: "Email or Password wrong!" });

    const token = sign(
      { email: userExist.email, id: userExist._id },
      `${process.env.JWT_SECRET}`,
      {
        expiresIn: "2h",
        algorithm: "HS256",
      },
    );

    return res.status(401).json({
      data: {
        token,
        user: {
          id: userExist._id,
          email: userExist.email,
          name: userExist.name,
          profilePicture: userExist.profilePicture,
        },
      },
      message: "Email or Password wrong!",
    });
  } catch (error) {
    throw Error(error as string);
  }
};
