import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";

const collectionName = "user_tokens";
export const UserTokenSchema = new Schema({
  user_id: String,
  device_id: String,
  token: String,
  updated_at: Date,
  created_at: Date,
});

const fields = [
  "_id",
  "user_id",
  "device_id",
  "token",
  "updated_at",
  "created_at",
];

const commonOptions = {
  listProperties: fields,
  filterProperties: fields,
  editProperties: fields.slice(1),
  showProperties: fields,
};

const UserTokens = {
  resource: dbProd.model(collectionName, UserTokenSchema),
  options: {
    id: "user_tokens",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const UserTokens_ = {
  resource: dbDev.model(collectionName, UserTokenSchema),
  options: {
    id: "user_tokens_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { UserTokens, UserTokens_ };
