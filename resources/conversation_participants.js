import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import Schema from "./db/Shema.js";

const ConversationParticipantSchema = new Schema({
  conversation_id: String,
  user_id: String,
  updated_at: Date,
  created_at: Date,
});

const fields = [
  "_id",
  "conversation_id",
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

const ConversationParticipants = {
  resource: dbProd.model(
    "conversations_participants",
    ConversationParticipantSchema
  ),
  options: {
    id: "conversations_participants",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const ConversationParticipants_ = {
  resource: dbDev.model(
    "conversations_participants",
    ConversationParticipantSchema
  ),
  options: {
    id: "conversations_participants_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { ConversationParticipants, ConversationParticipants_ };
