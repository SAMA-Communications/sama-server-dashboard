import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { BlockedUserSchema } from "../schemas/blocked_user.js";

const commonOptions = {};

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
