import { model, Schema } from "mongoose";

export const ConversationParticipantSchema = new Schema({
  _id: String,
  conversation_id: String,
  user_id: String,
  updated_at: Date,
  created_at: Date,
});

export const ConversationParticipant = model(
  "conversations_participants",
  ConversationParticipantSchema
);
