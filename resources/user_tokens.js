import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { Components } from "../components/components.js";
import { ObjectId } from "./db/ObjectId.js";

const collectionName = "user_tokens";
export const UserTokenSchema = new Schema({
  user_id: ObjectId,
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
  actions: {
    edit: {
      isAccessible: false,
      isVisible: true,
    },
  },
  showProperties: fields,
  properties: {
    token: {
      type: "string",
      components: {
        list: Components.ShortcutTokenView,
        show: Components.BlockTokenShow,
      },
    },
    user_id: {
      type: "string",
      components: {
        show: Components.BlockUserIdShow,
      },
    },
  },
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
