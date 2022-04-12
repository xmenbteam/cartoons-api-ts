import { Router } from "express";
import {
  getCommentById,
  getComments,
  patchCommentById,
} from "../controllers/comments.controller";

const commentsRouter: Router = Router();

commentsRouter.route("/").get(getComments);
commentsRouter
  .route("/:comment_id")
  .get(getCommentById)
  .patch(patchCommentById);

export default commentsRouter;
