"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studioDataFormatter = exports.userDataFormatter = void 0;
const userDataFormatter = (userData) => userData.map(({ username, name, avatar_url }) => [
    username,
    name,
    avatar_url,
]);
exports.userDataFormatter = userDataFormatter;
const studioDataFormatter = (studioData) => studioData.map(({ name, img_url, description, votes }) => [
    name,
    img_url,
    description,
    votes,
]);
exports.studioDataFormatter = studioDataFormatter;
