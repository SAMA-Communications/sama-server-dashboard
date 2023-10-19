// import { Components } from "../components/components.js";
import db from "./db/db.js";
import dbTest from "./db/db_test.js";
import { UserSchema } from "../schemas/User.js";

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
  resource: db.model("users", UserSchema),
  options: {
    id: "user",
    ...commonOptions,
  },
};

const Users_ = {
  resource: dbTest.model("users", UserSchema),
  options: {
    id: "user_",
    ...commonOptions,
  },
};

export { Users, Users_ };
