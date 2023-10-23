import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { Components } from "../components/components.js";
import { ObjectId } from "./db/ObjectId.js";

const collectionName = "conversations_participants";
export const ConversationsParticipantSchema = new Schema({
  conversation_id: ObjectId,
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
  editProperties: fields.slice(1),
  showProperties: fields,
  properties: {
    _id: {
      type: "string",
      components: {
        list: Components.ShortcutIdView,
      },
    },
    conversation_id: {
      type: "string",
      components: {
        show: Components.BlockConversationIdShow,
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

const ConversationsParticipants = {
  resource: dbProd.model(collectionName, ConversationsParticipantSchema),
  options: {
    id: "conversations_participants",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const ConversationsParticipants_ = {
  resource: dbDev.model(collectionName, ConversationsParticipantSchema),
  options: {
    id: "conversations_participants_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { ConversationsParticipants, ConversationsParticipants_ };
