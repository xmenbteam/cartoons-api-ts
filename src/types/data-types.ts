// Studio === DB_Object

interface DB_Object {
  name: String;
  votes: Number;
  img_url: String;
}

interface DB_Cartoon extends DB_Object {
  description: String;
  studio_id: Number;
  created_at: Date;
}

interface DB_Character extends DB_Object {
  cartoon_id: Number;
}

interface DB_Studio extends DB_Object {
  description: string;
}

type DB_User = {
  username: string;
  name: string;
  avatar_url: string;
};

type DB_Comment = {
  body: String;
  author: String;
  created_at: Date;
  votes: Number;
  cartoon_id: Number;
};

export { DB_Object, DB_Cartoon, DB_Character, DB_Comment, DB_Studio, DB_User };
