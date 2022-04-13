import express, { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUserByUsername,
  postNewUser,
} from "../controllers/users.controller";

const usersRouter: Router = express.Router();

usersRouter.route("/").get(getAllUsers).post(postNewUser);
usersRouter.route("/:username").get(getUserByUsername).delete(deleteUser);

export default usersRouter;
