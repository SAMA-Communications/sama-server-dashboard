import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";

const collectionName = "messages";
const MessageSchema = new Schema({
  t: Number,
  from: String,
  body: String,
  cid: String,
  x: String,
  attachments: Array,
  updated_at: Date,
  created_at: Date,
});

const fields = [
  "_id",
  "t",
  "from",
  "body",
  "cid",
  "x",
  "attachments",
  "updated_at",
  "created_at",
];

const commonOptions = {
  listProperties: fields,
  filterProperties: fields,
  editProperties: fields.slice(1),
  showProperties: fields,
};

const Messages = {
  resource: dbProd.model(collectionName, MessageSchema),
  options: {
    id: "messages",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const Messages_ = {
  resource: dbDev.model(collectionName, MessageSchema),
  options: {
    id: "messages_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { Messages, Messages_ };
