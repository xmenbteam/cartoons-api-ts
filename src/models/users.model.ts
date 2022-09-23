import db from "../db/connection";
import { DB_User } from "../types/data-types";

export const fetchUsers = async () => {
  let queryStr = `SELECT * FROM users`;

  const { rows } = await db.query(queryStr);

  return rows;
};

export const fetchUserByUsername = async (username: string) => {
  let queryStr = `SELECT * FROM users WHERE username = $1 LIMIT 1`;
  const values = [username];

  const { rows } = await db.query(queryStr, values);

  if (!rows[0]) return Promise.reject({ status: 404, msg: "User not found!" });

  return rows[0];
};

export const insertUser = async ({ name, username, avatar_url }: DB_User) => {
  let queryStr = `INSERT INTO users (name, username, avatar_url) VALUES ($1,$2,$3) RETURNING *`;
  let values = [name, username, avatar_url];

  const { rows } = await db.query(queryStr, values);

  return rows[0];
};
export const removeUser = async (username: string) => {
  let queryStr = `
  DELETE FROM users
  WHERE username = $1
  `;
  const values = [username];

  const result = await db.query(queryStr, values);
  // rowCount === number of deleted rows
  const { rowCount } = result;
  if (!rowCount) return Promise.reject({ status: 404, msg: "User not found!" });

  return result;
};
