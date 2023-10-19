// import { Components } from "../components/components.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { UserSchema } from "../schemas/user.js";

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
  // properties: {
  //   content: {
  //     components: {
  //       edit: Components.MyEditBlock,
  //     },
  //   },
  // },
  listProperties: fields,
  filterProperties: fields,
  editProperties: ["email", "phone", "first_name", "last_name"],
  showProperties: fields,
};

const Users = {
  resource: dbProd.model("users", UserSchema),
  options: {
    id: "user",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const Users_ = {
  resource: dbDev.model("users", UserSchema),
  options: {
    id: "user_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { Users, Users_ };
