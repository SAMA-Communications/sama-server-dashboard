import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { MessageSchema } from "../schemas/message.js";

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
  editProperties: ["body", "x", "attachments"],
  showProperties: fields,
};

const Messages = {
  resource: dbProd.model("messages", MessageSchema),
  options: {
    id: "messages",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const Messages_ = {
  resource: dbDev.model("messages", MessageSchema),
  options: {
    id: "messages_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { Messages, Messages_ };
