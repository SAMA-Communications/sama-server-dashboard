import { model, Schema } from "mongoose";

export const ConversationSchema = new Schema({
  name: String,
  type: String,
  description: String,
  owner_id: String,
  opponent_id: String,
  updated_at: Date,
  created_at: Date,
});

export const Conversation = model("conversations", ConversationSchema);
