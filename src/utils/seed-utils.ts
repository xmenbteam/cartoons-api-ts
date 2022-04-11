import {
  DB_Cartoon,
  DB_Character,
  DB_Comment,
  DB_Studio,
  DB_User,
} from "../types/data-types";
import {
  formattedCartoonData,
  formattedCharacterData,
  formattedCommentData,
  formattedStudioData,
  formattedUserData,
} from "../types/formatted-data-tuples";

export const userDataFormatter = (userData: DB_User[]): formattedUserData[] =>
  userData.map(({ username, name, avatar_url }) => [
    username,
    name,
    avatar_url,
  ]);

export const studioDataFormatter = (
  studioData: DB_Studio[]
): formattedStudioData[] =>
  studioData.map(({ name, img_url, description, votes }) => [
    name,
    img_url,
    description,
    votes,
  ]);

export const cartoonDataFormatter = (
  cartoonData: DB_Cartoon[]
): formattedCartoonData[] =>
  cartoonData.map(
    ({ name, votes, created_at, description, img_url, studio_id }) => [
      name,
      votes,
      created_at,
      description,
      img_url,
      studio_id,
    ]
  );

export const characterDataFormatter = (
  characterData: DB_Character[]
): formattedCharacterData[] =>
  characterData.map(({ name, votes, cartoon_id, img_url }) => [
    name,
    votes,
    cartoon_id,
    img_url,
  ]);

export const commentsDataFormatter = (
  commentsData: DB_Comment[]
): formattedCommentData[] =>
  commentsData.map(({ body, votes, author, cartoon_id, created_at }) => [
    author,
    cartoon_id,
    body,
    votes,
    created_at,
  ]);
