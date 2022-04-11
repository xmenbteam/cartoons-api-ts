// Studio === DB_Object

interface DB_Object {
  name: string;
  votes: number;
  img_url: string;
}

interface DB_Cartoon extends DB_Object {
  description: string;
  studio_id: number;
  created_at: Date;
}

interface DB_Character extends DB_Object {
  cartoon_id: number;
}

interface DB_Studio extends DB_Object {
  description: string;
}

interface Returned_Studio extends DB_Studio {
  studio_id: number;
}

type DB_User = {
  username: string;
  name: string;
  avatar_url: string;
};

type DB_Comment = {
  body: string;
  author: string;
  created_at: Date;
  votes: number;
  cartoon_id: number;
};

type SeedData = {
  studiosData: DB_Studio[];
  usersData: DB_User[];
  commentsData: DB_Comment[];
  charactersData: DB_Character[];
  cartoonsData: DB_Cartoon[];
};

type PostStudioBody = {
  name: string;
  img_url: string;
  description: string;
};

export {
  DB_Object,
  DB_Cartoon,
  DB_Character,
  DB_Comment,
  DB_Studio,
  DB_User,
  SeedData,
  Returned_Studio,
  PostStudioBody,
};
