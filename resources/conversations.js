import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { Components } from "../components/components.js";

const collectionName = "conversations";
const ConversationSchema = new Schema({
  name: String,
  type: String,
  description: String,
  owner_id: String,
  opponent_id: String,
  participants: Array,
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
  "participants",
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
    description: {
      type: "string",
      components: {
        list: Components.ShortcutDescriptionView,
        show: Components.BlockDescriptionShow,
      },
    },
    owner_id: {
      type: "string",
      components: {
        show: Components.BlockOwnerIdShow,
      },
    },
    opponent_id: {
      type: "string",
      components: {
        show: Components.BlockOpponentIdShow,
      },
    },
    type: {
      type: "string",
      components: {
        list: Components.ShortcutTypeView,
        show: Components.BlockTypeShow,
      },
    },
  },
};

const Conversations = {
  resource: dbProd.model(collectionName, ConversationSchema),
  options: {
    id: "conversations",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const Conversations_ = {
  resource: dbDev.model(collectionName, ConversationSchema),
  options: {
    id: "conversations_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { Conversations, Conversations_ };
