import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";

const UserTokenSchema = new Schema({
  user_id: String,
  device_id: String,
  token: String,
  updated_at: Date,
  created_at: Date,
});

const commonOptions = {};

const UserTokens = {
  resource: dbProd.model("user_tokens", UserTokenSchema),
  options: {
    id: "user_tokens",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const UserTokens_ = {
  resource: dbDev.model("user_tokens", UserTokenSchema),
  options: {
    id: "user_tokens_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { UserTokens, UserTokens_ };
