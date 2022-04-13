import { Router } from "express";
import {
  deleteComment,
  getCommentById,
  getComments,
  patchCommentById,
  postComment,
} from "../controllers/comments.controller";

const commentsRouter: Router = Router();

commentsRouter.route("/").get(getComments).post(postComment);
commentsRouter
  .route("/:comment_id")
  .get(getCommentById)
  .patch(patchCommentById)
  .delete(deleteComment);

export default commentsRouter;
