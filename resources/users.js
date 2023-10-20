import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { Components } from "../components/components.js";

const collectionName = "users";
const UserSchema = new Schema({
  login: String,
  email: String,
  phone: String,
  recent_activity: Number,
  first_name: String,
  last_name: String,
  updated_at: Date,
  created_at: Date,
});

const fields = [
  "_id",
  "login",
  "email",
  "phone",
  "recent_activity",
  "first_name",
  "last_name",
  "updated_at",
  "created_at",
];

const commonOptions = {
  listProperties: fields,
  filterProperties: fields,
  editProperties: fields.slice(1),
  showProperties: fields,
  properties: {
    _id: {
      type: "string",
      components: {
        list: Components.ShortcutIdView,
      },
    },
  },
};

const Users = {
  resource: dbProd.model(collectionName, UserSchema),
  options: {
    id: "user",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const Users_ = {
  resource: dbDev.model(collectionName, UserSchema),
  options: {
    id: "user_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { Users, Users_ };
