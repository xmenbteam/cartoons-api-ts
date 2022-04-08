"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsDataFormatter = exports.characterDataFormatter = exports.cartoonDataFormatter = exports.studioDataFormatter = exports.userDataFormatter = void 0;
const userDataFormatter = (userData) => userData.map(({ username, name, avatar_url }) => [
    username,
    avatar_url,
    name,
]);
exports.userDataFormatter = userDataFormatter;
const studioDataFormatter = (studioData) => studioData.map(({ name, img_url, description, votes }) => [
    name,
    img_url,
    description,
    votes,
]);
exports.studioDataFormatter = studioDataFormatter;
const cartoonDataFormatter = (cartoonData) => cartoonData.map(({ name, votes, created_at, description, img_url, studio_id }) => [
    name,
    votes,
    created_at,
    description,
    img_url,
    studio_id,
]);
exports.cartoonDataFormatter = cartoonDataFormatter;
const characterDataFormatter = (characterData) => characterData.map(({ name, votes, cartoon_id, img_url }) => [
    name,
    votes,
    cartoon_id,
    img_url,
]);
exports.characterDataFormatter = characterDataFormatter;
const commentsDataFormatter = (commentsData) => commentsData.map(({ body, votes, author, cartoon_id, created_at }) => [
    votes,
    author,
    cartoon_id,
    body,
    created_at,
]);
exports.commentsDataFormatter = commentsDataFormatter;
