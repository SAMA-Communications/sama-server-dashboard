import { model, Schema } from "mongoose";

export const MessageStatusSchema = new Schema({
  _id: String,
  cid: String,
  mid: String,
  user_id: String,
  status: String,
  updated_at: Date,
  created_at: Date,
});

export const MessageStatus = model("message_status", MessageStatusSchema);
