import { NextFunction, Request, Response } from "express";
import {
  fetchCharacterById,
  fetchCharacters,
  insertCharacter,
  updateCharacterById,
} from "../models/characters.model";
import { FetchCharacterParams, PostCharacterParams } from "../types/data-types";
import { isQuery } from "../utils/util-functions";

export const getCharacterById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { character_id } = req.params;
    const character = await fetchCharacterById(character_id);

    res.status(200).send({ character });
  } catch (error) {
    next(error);
  }
};

export const getCharacters = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (isQuery(req.query) && isQuery(req.params)) {
      const props: FetchCharacterParams = req.query;
      props.cartoon_id = req.params.cartoon_id;
      const characters = await fetchCharacters(props);

      res.status(200).send({ characters });
    }
  } catch (error) {
    next(error);
  }
};
export const patchCharacterById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { inc_votes } = req.body;
    const { character_id } = req.params;

    const character = await updateCharacterById(character_id, inc_votes);

    res.status(200).send({ character });
  } catch (err) {
    next(err);
  }
};

export const postCharacter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, cartoon_id, img_url }: PostCharacterParams = req.body;

    const character = await insertCharacter({ name, cartoon_id, img_url });

    res.status(201).send({ character });
  } catch (err) {
    next(err);
  }
};
