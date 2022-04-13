"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comments_controller_1 = require("../controllers/comments.controller");
const commentsRouter = (0, express_1.Router)();
commentsRouter.route("/").get(comments_controller_1.getComments).post(comments_controller_1.postComment);
commentsRouter
    .route("/:comment_id")
    .get(comments_controller_1.getCommentById)
    .patch(comments_controller_1.patchCommentById)
    .delete(comments_controller_1.deleteComment);
exports.default = commentsRouter;
