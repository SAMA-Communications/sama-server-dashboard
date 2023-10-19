import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { ConversationSchema } from "../schemas/conversation.js";

const fields = [
  "_id",
  "name",
  "type",
  "description",
  "owner_id",
  "opponent_id",
  "updated_at",
  "created_at",
];

const commonOptions = {
  listProperties: fields,
  filterProperties: fields,
  editProperties: ["name", "description"],
  showProperties: fields,
};

const Conversations = {
  resource: dbProd.model("conversations", ConversationSchema),
  options: {
    id: "conversations",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const Conversations_ = {
  resource: dbDev.model("conversations", ConversationSchema),
  options: {
    id: "conversations_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { Conversations, Conversations_ };
