import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { BlockedUserSchema } from "../schemas/blocked_user.js";

const fields = [
  "_id",
  "blocked_user_id",
  "user_id",
  "updated_at",
  "created_at",
];

const commonOptions = {
  listProperties: fields,
  filterProperties: fields,
  editProperties: [],
  showProperties: fields,
};

const BlockedUsers = {
  resource: dbProd.model("blocked_users", BlockedUserSchema),
  options: {
    id: "blocked_users",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const BlockedUsers_ = {
  resource: dbDev.model("blocked_users", BlockedUserSchema),
  options: {
    id: "blocked_users_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { BlockedUsers, BlockedUsers_ };
