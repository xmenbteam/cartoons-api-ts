import db from "../db/connection";
import { FetchCharacterParams, PostCharacterParams } from "../types/data-types";
import { orderByValues, sortByValues } from "../utils/query-utils";
import { checkIfValid, pageOffsetCalc } from "../utils/util-functions";

export const fetchCharacterById = async (character_id: string) => {
  const queryStr = `SELECT * FROM characters WHERE character_id = $1;`;
  const values = [character_id];

  const response = await db.query(queryStr, values);

  if (!response.rows[0])
    return Promise.reject({ status: 404, msg: "Character not found!" });

  return response.rows[0];
};

export const fetchCharacters = async ({
  sort_by = "created_at",
  order_by = "asc",
  cartoon_id,
  limit = 10,
  page = 1,
}: FetchCharacterParams) => {
  const offset = pageOffsetCalc(page, limit);
  const values: any[] = [limit, offset];

  if (!checkIfValid(order_by, orderByValues))
    return Promise.reject({
      status: 400,
      msg: `Invalid order_by query: ${order_by}`,
    });

  if (!checkIfValid(sort_by, sortByValues))
    return Promise.reject({
      status: 400,
      msg: `Invalid sort_by query: ${sort_by}`,
    });

  let queryStr = `
  SELECT characters.*,
  COUNT(*) OVER() :: INT AS full_count,
  cartoons.name AS cartoon_name
  FROM characters
    LEFT JOIN cartoons ON characters.cartoon_id = cartoons.cartoon_id
    `;

  if (cartoon_id) {
    queryStr += `WHERE characters.cartoon_id = $3`;
    values.push(cartoon_id);
  }

  queryStr += `
  ORDER BY ${sort_by} ${order_by}
  LIMIT $1 OFFSET $2
  ;`;
  const response = await db.query(queryStr, values);

  const characters = response.rows;

  const returnObj = {
    characters,
    currentPage: Number(page),
    charactersPerPage: limit,
    pageTotal: Math.ceil(characters[0].full_count / limit),
  };

  return returnObj;
};

export const updateCharacterById = async (
  character_id: string,
  inc_votes: number
) => {
  const queryStr = `
  UPDATE characters
  SET votes = votes + $1
  WHERE character_id = $2
  RETURNING *;
  `;

  const values = [inc_votes, character_id];

  const response = await db.query(queryStr, values);

  if (!response.rows[0])
    return Promise.reject({ status: 404, msg: "Character not found!" });

  return response.rows[0];
};

export const insertCharacter = async ({
  name,
  cartoon_id,
  img_url,
}: PostCharacterParams) => {
  let queryStr = `
  INSERT INTO characters (name, cartoon_id, img_url)
  VALUES ($1, $2, $3)
  RETURNING *;
  `;
  const values = [name, cartoon_id, img_url];

  const response = await db.query(queryStr, values);

  return response.rows[0];
};

export const removeCharacterById = async (character_id: string) => {
  let queryStr = `
  DELETE FROM characters
  WHERE character_id = $1
  `;
  const values = [character_id];

  const result = await db.query(queryStr, values);
  // rowCount === number of deleted rows
  const { rowCount } = result;
  if (!rowCount)
    return Promise.reject({ status: 404, msg: "Character not found!" });

  return result;
};
