import db from "../db/connection";
import { FetchCharacterParams } from "../types/data-types";

const fetchCharacters = async ({
  sort_by = "created_at",
  order_by = "asc",
  studio_id,
  cartoon_id,
  limit = 10,
  page = 1,
}: FetchCharacterParams) => {
  let queryStr = `
    SELECT * FROM characters;
    `;
  const response = await db.query(queryStr);

  return response.rows;
};
