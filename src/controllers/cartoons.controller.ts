import { NextFunction, Request, Response } from "express";
import {
  fetchCartoonById,
  fetchCartoons,
  insertCartoon,
  removeCartoonById,
  updateCartoon,
} from "../models/cartoons.model";
import { FetchCartoonParams, PostCartoonParams } from "../types/data-types";

export const getCartoonById = async (
  { params }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cartoon_id } = params;

    const cartoon = await fetchCartoonById(cartoon_id);

    res.status(200).send({ cartoon });
  } catch (error) {
    next(error);
  }
};

export const getCartoons = async (
  { query, params }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { sort_by, order_by, page, limit }: FetchCartoonParams = query;
    const { studio_id } = params;

    const cartoons = await fetchCartoons({
      sort_by,
      order_by,
      studio_id,
      page,
      limit,
    });

    res.status(200).send({ cartoons });
  } catch (error) {
    next(error);
  }
};

export const postCartoon = async (
  { body }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description, img_url, studio_id }: PostCartoonParams = body;

    const cartoon = await insertCartoon({
      name,
      description,
      img_url,
      studio_id,
    });

    res.status(201).send({ cartoon });
  } catch (err) {
    next(err);
  }
};

export const patchCartoonById = async (
  { body, params }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cartoon_id } = params;
    const { inc_votes } = body;

    const cartoon = await updateCartoon({ cartoon_id, inc_votes });

    res.status(201).send({ cartoon });
  } catch (err) {
    next(err);
  }
};

export const deleteCartoonById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { cartoon_id } = req.params;

    await removeCartoonById(cartoon_id);

    res.status(204).send({ msg: "Cartoon deleted!" });
  } catch (err) {
    next(err);
  }
};
