\c cartoons_db_test;

-- SELECT characters.*, cartoons.name
-- FROM characters
-- LEFT JOIN cartoons ON characters.cartoon_id = cartoons.cartoon_id
-- GROUP BY cartoons.character_id;

SELECT characters.*,
cartoons.name AS cartoon_name
FROM characters
LEFT JOIN cartoons ON characters.cartoon_id = cartoons.cartoon_id;
-- GROUP BY characters.character_id;

-- SELECT cartoon_id, name
-- FROM cartoons;