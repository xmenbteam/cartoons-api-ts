import express, { Router } from "express";
import {
  getAllUsers,
  getUserByUsername,
  postNewUser,
} from "../controllers/users.controller";

const usersRouter: Router = express.Router();

usersRouter.route("/").get(getAllUsers).post(postNewUser);
usersRouter.route("/:username").get(getUserByUsername);

export default usersRouter;
