import db from "../db/connection";
import {
  FetchCartoonParams,
  PatchCartoonParams,
  PostCartoonParams,
} from "../types/data-types";
import { orderByValues, sortByValues } from "../utils/query-utils";
import { checkIfValid, pageOffsetCalc } from "../utils/util-functions";

export const fetchCartoonById = async (cartoon_id: string) => {
  const queryStr = `SELECT cartoons.*, 
  COUNT(characters.cartoon_id) :: INT AS character_count
  FROM cartoons 
  LEFT JOIN characters ON characters.cartoon_id = cartoons.cartoon_id
  WHERE cartoons.cartoon_id = $1 
  GROUP BY cartoons.cartoon_id
  LIMIT 1`;
  const values = [cartoon_id];

  const { rows } = await db.query(queryStr, values);

  if (!rows[0])
    return Promise.reject({ status: 404, msg: "Cartoon not found!" });

  return rows[0];
};

export const fetchCartoons = async ({
  sort_by = "created_at",
  order_by = "asc",
  studio_id,
  limit = 10,
  page = 1,
}: FetchCartoonParams) => {
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
  SELECT cartoons.*, 
  COUNT(characters.character_id) :: INT AS character_count,
  COUNT(*) OVER() :: INT AS full_count
  FROM cartoons
  LEFT JOIN characters ON characters.cartoon_id = cartoons.cartoon_id
  `;

  if (studio_id) {
    queryStr += `WHERE cartoons.studio_id = $3`;
    values.push(studio_id);
  }

  queryStr += `GROUP BY cartoons.cartoon_id
  ORDER BY ${sort_by} ${order_by}
  LIMIT $1 OFFSET $2
  `;

  const { rows } = await db.query(queryStr, values);

  if (studio_id && !rows[0])
    return Promise.reject({ status: 404, msg: "Studio does not exist!" });

  if (!rows[0]) return Promise.reject({ status: 404, msg: "Not found!" });

  const returnedObject = {
    cartoons: rows,
    currentPage: Number(page),
    cartoonsPerPage: limit,
    pageTotal: Math.ceil(rows[0].full_count / limit),
  };

  return returnedObject;
};

export const insertCartoon = async ({
  name,
  description,
  img_url,
  studio_id,
}: PostCartoonParams) => {
  let queryStr = `
  INSERT INTO cartoons (name,
  description,
  img_url,
  studio_id) 
  VALUES ($1,$2,$3,$4) RETURNING *;
  `;
  const values = [name, description, img_url, studio_id];

  const { rows } = await db.query(queryStr, values);

  return rows[0];
};

export const updateCartoon = async ({
  cartoon_id,
  inc_votes,
}: PatchCartoonParams) => {
  let queryStr = `
  UPDATE cartoons
  SET votes = votes + $1
  WHERE cartoon_id = $2
  RETURNING *;  
  `;
  const values = [inc_votes, cartoon_id];

  const { rows } = await db.query(queryStr, values);

  return rows[0];
};

export const removeCartoonById = async (cartoon_id: string) => {
  let queryStr = `
  DELETE FROM cartoons
  WHERE cartoon_id = $1
  `;
  const values = [cartoon_id];

  const result = await db.query(queryStr, values);
  // rowCount === number of deleted rows
  const { rowCount } = result;
  if (!rowCount)
    return Promise.reject({ status: 404, msg: "Cartoon not found!" });

  return result;
};
