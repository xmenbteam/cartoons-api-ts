import { NextFunction, Request, Response } from "express";

export const getWelcome = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({
      msg: "Welcome to the cartoons API! Go to /api to see possible endpoints!",
    });
  } catch (err) {
    next(err);
  }
};
