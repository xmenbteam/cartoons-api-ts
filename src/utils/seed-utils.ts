import { DB_Studio, DB_User } from "../types/dataTypes";

export const userDataFormatter = (userData: DB_User[]) =>
  userData.map(({ username, name, avatar_url }) => [
    username,
    name,
    avatar_url,
  ]);

export const studioDataFormatter = (studioData: DB_Studio[]) =>
  studioData.map(({ name, img_url, description, votes }) => [
    name,
    img_url,
    description,
    votes,
  ]);
