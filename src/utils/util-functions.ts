import { FetchCharacterParams } from "../types/data-types";

export const pageOffsetCalc = (page: number, limit: number): number => {
  return (page - 1) * limit;
};

export const checkIfValid = (string: string, array: string[]): boolean =>
  array.includes(string);

export const isQuery = (obj: any): obj is FetchCharacterParams => {
  for (let key in obj) {
    if (
      obj[key] !== undefined &&
      typeof obj[key] !== "string" &&
      typeof obj[key] !== "number"
    ) {
      return false;
    }
  }
  return true;
};
