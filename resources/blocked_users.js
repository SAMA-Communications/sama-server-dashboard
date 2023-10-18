import db from "./db/db.js";
import dbTest from "./db/db_test.js";
import { BlockedUserSchema } from "../schemas/blocked_user.js";

const commonOptions = {};

const BlockedUsers = {
  resource: db.model("blocked_users", BlockedUserSchema),
  options: {
    id: "blocked_users",
    ...commonOptions,
  },
};

const BlockedUsers_ = {
  resource: dbTest.model("blocked_users", BlockedUserSchema),
  options: {
    id: "blocked_users_",
    ...commonOptions,
  },
};

export { BlockedUsers, BlockedUsers_ };
