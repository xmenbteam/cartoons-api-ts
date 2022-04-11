import db from "../db/connection";
import {
  FetchStudioParams,
  PostStudioBody,
  Returned_Studio,
  Returned_Studio_Object,
} from "../types/data-types";
import { orderByValues, sortByValues } from "../utils/query-utils";
import { checkIfValid, pageOffsetCalc } from "../utils/util-functions";

export const fetchStudios = async ({
  sort_by = "studio_id",
  order_by = "asc",
  limit = 10,
  page = 1,
}: FetchStudioParams): Promise<Returned_Studio_Object> => {
  const offset = pageOffsetCalc(page, limit);
  const values = [limit, offset];

  if (!checkIfValid(sort_by, sortByValues)) {
    return Promise.reject({
      status: 400,
      msg: `Invalid sort_by query: ${sort_by}`,
    });
  }

  if (!checkIfValid(order_by, orderByValues)) {
    return Promise.reject({
      status: 400,
      msg: `Invalid order_by query: ${order_by}`,
    });
  }

  let query = `SELECT studios.*, COUNT(cartoons.studio_id) :: INT AS cartoon_count,
  COUNT(*) OVER() :: INT AS full_count  
  FROM studios
  LEFT JOIN cartoons ON cartoons.studio_id = studios.studio_id
  GROUP BY studios.studio_id
  ORDER BY ${sort_by} ${order_by}
  LIMIT $1 OFFSET $2
  `;

  const response = await db.query(query, values);

  const studios = response.rows;

  const totalStudiosObject = {
    studios,
    currentPage: page,
    studiosPerPage: limit,
    pageTotal: Math.ceil(studios[0].full_count / limit),
  };

  return totalStudiosObject;
};

export const fetchStudioById = async (
  studio_id: string
): Promise<Returned_Studio> => {
  let query = `SELECT studios.*, COUNT(cartoons.studio_id) :: INT AS cartoon_count
  FROM studios
  LEFT JOIN cartoons ON cartoons.studio_id = studios.studio_id
  WHERE studios.studio_id = $1
  GROUP BY studios.studio_id
  LIMIT 1;
  `;
  const values = [studio_id];
  const studio = await db.query(query, values);

  if (!studio.rows[0])
    return Promise.reject({ status: 404, msg: "Studio not found!" });
  return studio.rows[0];
};

export const updateStudioById = async (
  studio_id: string,
  inc_votes: string
): Promise<Returned_Studio> => {
  let queryStr = `
  UPDATE studios 
  SET votes = votes + $1
  WHERE studio_id = $2
  RETURNING *
  `;
  let values = [inc_votes, studio_id];

  const studio = await db.query(queryStr, values);

  if (!studio.rows[0])
    return Promise.reject({ status: 404, msg: "Studio not found!" });
  return studio.rows[0];
};

export const insertStudio = async ({
  name,
  img_url,
  description,
}: PostStudioBody): Promise<Returned_Studio> => {
  let queryStr = `
  INSERT INTO studios (name, img_url, description) VALUES ($1,$2,$3) RETURNING *;
  `;
  const values = [name, img_url, description];

  const response = await db.query(queryStr, values);

  return response.rows[0];
};

export const removeStudioById = async (studio_id: string) => {
  let queryStr = `
  DELETE FROM studios * WHERE studio_id = $1
  `;
  const values = [studio_id];

  const response = await db.query(queryStr, values);

  return response.rows;
};
