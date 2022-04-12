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

interface Returned_Cartoon extends DB_Cartoon {
  cartoon_id: number;
  full_count: number;
  character_count: number;
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

interface Returned_User extends DB_User {
  user_id: number;
}

type FetchStudioParams = {
  sort_by?: string;
  order_by?: string;
  limit?: number;
  page?: number;
};

type FetchCartoonParams = {
  sort_by?: string;
  order_by?: string;
  studio_id?: string;
  limit?: number;
  page?: number;
};

type FetchCharacterParams = {
  sort_by?: string;
  order_by?: string;
  studio_id?: string;
  limit?: number;
  page?: number;
  cartoon_id?: string;
};

type FetchCommentsParams = {
  sort_by?: string;
  order_by?: string;
  limit?: number;
  page?: number;
  cartoon_id?: string;
};

type PostCartoonParams = {
  name: string;
  description: string;
  img_url: string;
  studio_id: number;
};

type PostCharacterParams = {
  name: string;
  cartoon_id: number;
  img_url: string;
};

export type PatchCartoonParams = {
  cartoon_id: string;
  inc_votes: number;
};

type Returned_Studio_Object = {
  studios: Returned_Studio[];
  currentPage: number;
  studiosPerPage: number;
  pageTotal: number;
};

type Returned_Comment = {
  comment_id: number;
  author: string;
  cartoon_id: number;
  body: string;
  votes: number;
  created_at: string;
  full_count: number;
};

export {
  DB_Object,
  DB_Cartoon,
  DB_Character,
  DB_Comment,
  DB_Studio,
  DB_User,
  Returned_Studio_Object,
  Returned_Cartoon,
  PostCartoonParams,
  PostCharacterParams,
  FetchCommentsParams,
  SeedData,
  Returned_Studio,
  Returned_User,
  FetchStudioParams,
  FetchCartoonParams,
  FetchCharacterParams,
  PostStudioBody,
  Returned_Comment,
};
