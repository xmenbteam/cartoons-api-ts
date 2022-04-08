import db from "../connection";
import { seed } from "./seed";
import {
  studiosData,
  usersData,
  commentsData,
  charactersData,
  cartoonsData,
} from "../data/development-data/index";

const runSeed = async () => {
  await seed({
    studiosData,
    usersData,
    commentsData,
    charactersData,
    cartoonsData,
  });
  await db.end();
};

runSeed();
