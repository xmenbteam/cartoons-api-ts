import format from "pg-format";
import { SeedData } from "../../types/data-types";
import { createTables, dropTables } from "../../utils/manage-tables";
import {
  cartoonDataFormatter,
  characterDataFormatter,
  commentsDataFormatter,
  studioDataFormatter,
  userDataFormatter,
} from "../../utils/seed-utils";
import db from "../connection";

export const seed = async ({
  studiosData,
  usersData,
  commentsData,
  charactersData,
  cartoonsData,
}: SeedData) => {
  await dropTables();
  await createTables();

  const insertIntoStudios = format(
    `
  INSERT INTO studios
  (name, img_url, description, votes)
  VALUES
  %L
  RETURNING *;
  `,
    studioDataFormatter(studiosData)
  );

  const studiosQuery = await db.query(insertIntoStudios);
  const studios = studiosQuery.rows;

  const insertIntoUsers = format(
    `
  INSERT INTO users
  (username, name, avatar_url)
  VALUES
  %L
  RETURNING *;
  `,
    userDataFormatter(usersData)
  );

  const usersQuery = await db.query(insertIntoUsers);
  const users = usersQuery.rows;

  await Promise.all([studios, users]);

  const insertIntoCartoons = format(
    `
  INSERT INTO cartoons
  (
    name,
    votes,
    created_at,
    description,
    img_url,
    studio_id
  )
  VALUES 
  %L
  RETURNING *;
  `,
    cartoonDataFormatter(cartoonsData)
  );

  await db.query(insertIntoCartoons).then(({ rows }) => rows);

  const insertIntoCharacters = format(
    `
    INSERT INTO characters
    (
    name,
    votes,
    cartoon_id,
    img_url
    )
    VALUES
    %L
    RETURNING *;
    `,
    characterDataFormatter(charactersData)
  );

  await db.query(insertIntoCharacters).then(({ rows }) => rows);

  const insertIntoComments = format(
    `
INSERT INTO comments
(
   author,
    cartoon_id,
    body,
    votes,
    created_at
)
VALUES
%L
RETURNING *;
`,
    commentsDataFormatter(commentsData)
  );
  return db.query(insertIntoComments).then(({ rows }) => rows);
};
