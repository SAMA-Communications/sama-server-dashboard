import { model, Schema } from "mongoose";

export const ConversationSchema = new Schema({
  description: { type: "Number" },
  name: { type: "String" },
  owner_id: { type: "String", required: true },
  type: { type: "String", required: true },
  updated_at: { type: "Date" },
  created_at: { type: "Date" },
});

export const Conversation = model("conversations", ConversationSchema);
