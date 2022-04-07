import { createTables, dropTables } from "../../utils/manage-tables";

export const seed = async () => {
  await dropTables();
  await createTables();
};
