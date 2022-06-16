import db from "../db/connection";

const dropTables = async () => {
  await db.query(`DROP TABLE IF EXISTS comments`);
  await db.query(`DROP TABLE IF EXISTS characters`);
  await db.query(`DROP TABLE IF EXISTS cartoons`);
  await db.query(`DROP TABLE IF EXISTS studios`);
  await db.query(`DROP TABLE IF EXISTS users`);
};

const createTables = async () => {
  const createUsers = await db.query(`
  CREATE TABLE users
  (username VARCHAR(255) PRIMARY KEY NOT NULL,
  avatar_url VARCHAR(255),
  name VARCHAR(255) NOT NULL)
  `);

  const createStudios = await db.query(`
  CREATE TABLE studios
  (
      studio_id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR(255) NOT NULL,
      img_url VARCHAR DEFAULT 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      description VARCHAR NOT NULL,
      votes INT DEFAULT 0 NOT NULL
  )
  `);

  await Promise.all([createUsers, createStudios]);

  await db.query(`
  CREATE TABLE cartoons
  (
      cartoon_id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR(255) NOT NULL,
      votes INT DEFAULT 0 NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      description VARCHAR NOT NULL,
      img_url TEXT DEFAULT 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      studio_id INT NOT NULL,
      FOREIGN KEY (studio_id) REFERENCES studios(studio_id) ON DELETE CASCADE
  )
  `);

  await db.query(`
  CREATE TABLE characters
  (
      character_id SERIAL PRIMARY KEY NOT NULL,
      name VARCHAR (255) NOT NULL,
      votes INT DEFAULT 0 NOT NULL,
      cartoon_id INT NOT NULL,
      FOREIGN KEY (cartoon_id) REFERENCES cartoons(cartoon_id) ON DELETE CASCADE,
      img_url TEXT DEFAULT 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg'
  )
  `);

  await db.query(`
  CREATE TABLE comments 
  (
      comment_id SERIAL PRIMARY KEY NOT NULL,
      author VARCHAR(255) NOT NULL,
      FOREIGN KEY (author) REFERENCES users(username) ON DELETE CASCADE,
      cartoon_id INT NOT NULL,
      FOREIGN KEY (cartoon_id) REFERENCES cartoons(cartoon_id) ON DELETE CASCADE,
      body TEXT NOT NULL,
      votes INT DEFAULT 0 NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
  )
  `);
};

export { createTables, dropTables };
