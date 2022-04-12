import db from "../db/connection";
import { FetchCommentsParams } from "../types/data-types";
import { orderByValues, sortByValues } from "../utils/query-utils";
import { checkIfValid, pageOffsetCalc } from "../utils/util-functions";

export const fetchCommentById = async (comment_id: string) => {
  let queryStr = `
    SELECT * FROM comments
    WHERE comment_id = $1
    LIMIT 1;
    `;
  const values = [comment_id];

  const response = await db.query(queryStr, values);

  if (!response.rows[0])
    return Promise.reject({ status: 404, msg: "Comment not found!" });

  return response.rows[0];
};

export const fetchComments = async ({
  sort_by = "created_at",
  order_by = "asc",
  cartoon_id,
  limit = 10,
  page = 1,
}: FetchCommentsParams) => {
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
    SELECT comments.*,
     COUNT(*) OVER() :: INT AS full_count
     FROM comments
   `;

  if (cartoon_id) {
    queryStr += `WHERE cartoon_id = $3`;
    values.push(cartoon_id);
  }

  queryStr += `
     ORDER BY ${sort_by} ${order_by}
     LIMIT $1 OFFSET $2;`;

  const response = await db.query(queryStr, values);

  const comments = response.rows;

  const returnedObject = {
    comments,
    currentPage: Number(page),
    commmentsPerPage: limit,
    pageTotal: Math.ceil(comments[0].full_count / limit),
  };

  return returnedObject;
};

export const updateCommentById = async (
  comment_id: string,
  inc_votes: string
) => {
  let queryStr = `
  UPDATE comments
  SET votes = votes + $1
  WHERE comment_id = $2
  RETURNING *;
  `;
  const values = [inc_votes, comment_id];

  const response = await db.query(queryStr, values);

  if (!response.rows[0])
    return Promise.reject({ status: 404, msg: "Comment not found!" });

  return response.rows[0];
};
