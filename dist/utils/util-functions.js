"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isQuery = exports.checkIfValid = exports.pageOffsetCalc = void 0;
const pageOffsetCalc = (page, limit) => {
    return (page - 1) * limit;
};
exports.pageOffsetCalc = pageOffsetCalc;
const checkIfValid = (string, array) => array.includes(string);
exports.checkIfValid = checkIfValid;
const isQuery = (obj) => {
    for (let key in obj) {
        if (obj[key] !== undefined &&
            typeof obj[key] !== "string" &&
            typeof obj[key] !== "number") {
            return false;
        }
    }
    return true;
};
exports.isQuery = isQuery;
