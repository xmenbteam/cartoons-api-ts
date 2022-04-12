import { NextFunction, Request, Response } from "express";
import {
  fetchCommentById,
  fetchComments,
  updateCommentById,
} from "../models/comments.model";
import { FetchCommentsParams } from "../types/data-types";
import { isQuery } from "../utils/util-functions";

export const getCommentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { comment_id } = req.params;

    const comment = await fetchCommentById(comment_id);

    res.status(200).send({ comment });
  } catch (error) {
    next(error);
  }
};

export const getComments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (isQuery(req.query) && isQuery(req.params)) {
      const props: FetchCommentsParams = req.query;
      props.cartoon_id = req.params.cartoon_id;
      const comments = await fetchComments(props);

      res.status(200).send({ comments });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const patchCommentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { inc_votes } = req.body;
    const { comment_id } = req.params;

    const comment = await updateCommentById(comment_id, inc_votes);

    res.status(201).send({ comment });
  } catch (error) {
    next(error);
  }
};
