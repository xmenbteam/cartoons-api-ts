import { NextFunction, Request, Response } from "express";
import {
  fetchStudioById,
  fetchStudios,
  insertStudio,
  removeStudioById,
  updateStudioById,
} from "../models/studios.model";
import { FetchStudioParams } from "../types/data-types";

export const getStudios = async (
  { query }: Request,
  res: Response,
  next: NextFunction
) => {
  const { sort_by, order_by, limit, page }: FetchStudioParams = query;
  try {
    const studios = await fetchStudios({ sort_by, order_by, limit, page });
    res.status(200).send({ studios });
  } catch (err) {
    next(err);
  }
};

export const getStudioById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studio_id } = req.params;
    const studio = await fetchStudioById(studio_id);
    res.status(200).send({ studio });
  } catch (err) {
    next(err);
  }
};

export const patchStudioById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studio_id } = req.params;
    const { inc_votes } = req.body;
    const studio = await updateStudioById(studio_id, inc_votes);
    res.status(200).send({ studio });
  } catch (err) {
    next(err);
  }
};

export const postStudio = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req;
    const { name, img_url, description } = body;

    const studio = await insertStudio({ name, img_url, description });

    res.status(201).send({ studio });
  } catch (err) {
    next(err);
  }
};

export const deleteStudioById = async (
  { params }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { studio_id } = params;
    await removeStudioById(studio_id);
    res.status(204).send({ msg: "Studio deleted!" });
  } catch (error) {
    next(error);
  }
};
