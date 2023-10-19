import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { UserSchema } from "../schemas/user.js";

const commonOptions = {};

const OldUsers = {
  resource: dbProd.model("old_users", UserSchema),
  options: {
    id: "old_users",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const OldUsers_ = {
  resource: dbDev.model("old_users", UserSchema),
  options: {
    id: "old_users_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { OldUsers, OldUsers_ };
