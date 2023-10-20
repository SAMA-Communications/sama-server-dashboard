import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import Schema from "./db/Shema.js";

const ConversationSchema = new Schema({
  name: String,
  type: String,
  description: String,
  owner_id: String,
  opponent_id: String,
  updated_at: Date,
  created_at: Date,
});

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
