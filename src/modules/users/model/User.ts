import { v4 as uuidV4 } from "uuid";

class User {
  // colocar o operador de opcional pois o string não vai ser enviado na criação.
  id?: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
