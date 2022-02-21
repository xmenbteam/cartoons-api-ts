// Studio === DB_Object

interface DB_Object {
  name: String;
  votes: Number;
  created_at: Date;
  id: Number;
  description: String;
  img_url: String;
}

interface DB_Cartoon extends DB_Object {
  studio_id: Number;
}

interface DB_Character extends DB_Object {
  cartoon_id: Number;
}

type DB_Comment = {
  body: String;
  author: String;
  created_at: Date;
  votes: Number;
};

export { DB_Object, DB_Cartoon, DB_Character, DB_Comment };
