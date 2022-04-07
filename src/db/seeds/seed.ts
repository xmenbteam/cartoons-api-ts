import { createTables, dropTables } from "../../utils/seed-utils";

export const seed = async () => {
  await dropTables();
  await createTables();

  console.log("fukyeh");
};
