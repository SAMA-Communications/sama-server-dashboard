import db from "./db/db.js";
import dbTest from "./db/db_test.js";
import { UserTokenSchema } from "../schemas/user_token.js";

const commonOptions = {};

const UserTokens = {
  resource: db.model("user_tokens", UserTokenSchema),
  options: {
    id: "user_tokens",
    ...commonOptions,
  },
};

const UserTokens_ = {
  resource: dbTest.model("user_tokens", UserTokenSchema),
  options: {
    id: "user_tokens_",
    ...commonOptions,
  },
};

export { UserTokens, UserTokens_ };
