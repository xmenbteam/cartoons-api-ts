import { NextFunction, Request, Response } from "express";
import { fetchStudios } from "../models/studios.model";

export const getStudios = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const studios = await fetchStudios();
    res.status(200).send({ studios });
  } catch (err) {
    next(err);
  }
};
