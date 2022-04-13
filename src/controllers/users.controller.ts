import { NextFunction, Request, Response } from "express";
import {
  fetchUserByUsername,
  fetchUsers,
  insertUser,
  removeUser,
} from "../models/users.model";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await fetchUsers();

    res.status(200).send({ users });
  } catch (error) {
    next(error);
  }
};

export const getUserByUsername = async (
  { params }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username } = params;
    const user = await fetchUserByUsername(username);
    res.status(200).send({ user });
  } catch (error) {
    next(error);
  }
};

export const postNewUser = async (
  { body }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, username, avatar_url } = body;
    const user = await insertUser({ name, username, avatar_url });
    res.status(201).send({ user });
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username } = req.params;

    await removeUser(username);

    res.status(204).send({ msg: "User deleted!" });
  } catch (err) {
    next(err);
  }
};
