import db from "./db/db.js";
import dbTest from "./db/db_test.js";
import { ConversationParticipantSchema } from "../schemas/conversation_participant.js";

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
  resource: db.model(
    "conversations_participants",
    ConversationParticipantSchema
  ),
  options: {
    id: "conversations_participants",
    ...commonOptions,
  },
};

const ConversationParticipants_ = {
  resource: dbTest.model(
    "conversations_participants",
    ConversationParticipantSchema
  ),
  options: {
    id: "conversations_participants_",
    ...commonOptions,
  },
};

export { ConversationParticipants, ConversationParticipants_ };
