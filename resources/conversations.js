import db from "./db/db.js";
import dbTest from "./db/db_test.js";
import { ConversationSchema } from "../schemas/conversation.js";

const commonOptions = {
  listProperties: [
    "_id",
    "name",
    "type",
    "description",
    "owner_id",
    "opponent_id",
    "updated_at",
    "created_at",
  ],
};

const Conversations = {
  resource: db.model("conversations", ConversationSchema),
  options: {
    id: "conversations",
    ...commonOptions,
  },
};

const Conversations_ = {
  resource: dbTest.model("conversations", ConversationSchema),
  options: {
    id: "conversations_",
    ...commonOptions,
  },
};

export { Conversations, Conversations_ };
