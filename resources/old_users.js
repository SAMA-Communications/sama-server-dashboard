import db from "./db/db.js";
import dbTest from "./db/db_test.js";
import { UserSchema } from "../schemas/user.js";

const commonOptions = {};

const OldUsers = {
  resource: db.model("old_users", UserSchema),
  options: {
    id: "old_users",
    ...commonOptions,
  },
};

const OldUsers_ = {
  resource: dbTest.model("old_users", UserSchema),
  options: {
    id: "old_users_",
    ...commonOptions,
  },
};

export { OldUsers, OldUsers_ };
