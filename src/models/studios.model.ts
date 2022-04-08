import db from "../db/connection";

export const fetchStudios = async () => {
  let query = `SELECT * FROM studios`;

  const studios = await db.query(query);

  return studios.rows;
};

export const fetchStudioById = async (studio_id: string) => {
  let query = `SELECT * FROM studios WHERE studio_id = $1`;
  const values = [studio_id];

  const studios = await db.query(query, values);

  return studios.rows[0];
};
