import db from "../connection";
import { seed } from "./seed";

const runSeed = async () => {
  await seed();
  await db.end();
};

runSeed();
