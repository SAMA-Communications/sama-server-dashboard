import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import Schema from "./db/Shema.js";

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
  editProperties: ["status"],
  showProperties: fields,
};

const MessageStatuses = {
  resource: dbProd.model("message_statuses", MessageStatusSchema),
  options: {
    id: "message_statuses",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const MessageStatuses_ = {
  resource: dbDev.model("message_statuses", MessageStatusSchema),
  options: {
    id: "message_statuses_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { MessageStatuses, MessageStatuses_ };
