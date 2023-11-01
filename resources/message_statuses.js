import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { Components } from "../components/components.js";

const collectionName = "message_statuses";
const MessageStatusSchema = new Schema({
  cid: String,
  mid: String,
  user_id: String,
  status: String,
  updated_at: Date,
  created_at: Date,
});

const fields = [
  "_id",
  "cid",
  "mid",
  "user_id",
  "status",
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
    _id: {
      type: "string",
      components: {
        list: Components.ShortcutIdView,
      },
    },
    mid: {
      type: "string",
      components: {
        show: Components.BlockMidShow,
      },
    },
    user_id: {
      type: "string",
      components: {
        show: Components.BlockUserIdShow,
      },
    },
    cid: {
      type: "string",
      components: {
        show: Components.BlockCidShow,
      },
    },
  },
};

const MessageStatuses = {
  resource: dbProd.model(collectionName, MessageStatusSchema),
  options: {
    id: "message_statuses",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const MessageStatuses_ = {
  resource: dbDev.model(collectionName, MessageStatusSchema),
  options: {
    id: "message_statuses_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { MessageStatuses, MessageStatuses_ };
