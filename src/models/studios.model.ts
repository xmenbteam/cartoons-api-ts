import db from "../db/connection";
import { PostStudioBody, Returned_Studio } from "../types/data-types";

export const fetchStudios = async (): Promise<Returned_Studio[]> => {
  let query = `SELECT * FROM studios`;

  const studios = await db.query(query);

  return studios.rows;
};

export const fetchStudioById = async (
  studio_id: string
): Promise<Returned_Studio> => {
  let query = `SELECT * FROM studios WHERE studio_id = $1`;
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

  const studio = await db.query(queryStr, values);

  return studio.rows[0];
};

export const removeStudioById = async (studio_id: string) => {
  let queryStr = `
  DELETE FROM studios * WHERE studio_id = $1
  `;
  const values = [studio_id];

  const result = await db.query(queryStr, values);

  return result.rows;
};
