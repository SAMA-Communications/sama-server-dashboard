// import { Components } from "../components/components.js";
import db from "./db/db.js";
import dbTest from "./db/db_test.js";
import { UserSchema } from "../schemas/User.js";

const commonOptions = {
  // properties: {
  //   content: {
  //     components: {
  //       edit: Components.MyEditBlock,
  //     },
  //   },
  // },
  listProperties: [
    "_id",
    "login",
    "email",
    "phone",
    "recent_activity",
    "first_name",
    "last_name",
    "updated_at",
    "created_at",
  ],
  editProperties: ["email", "phone", "first_name", "last_name"],
};

const UserResource = {
  resource: db.model("Users", UserSchema),
  options: {
    id: "user",
    ...commonOptions,
  },
};

const UserResource_ = {
  resource: dbTest.model("Users", UserSchema),
  options: {
    id: "user_",
    ...commonOptions,
  },
};

export { UserResource_, UserResource };
