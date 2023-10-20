import { model, Schema } from "mongoose";

export const MessageSchema = new Schema({
  t: Number,
  from: String,
  body: String,
  cid: String,
  x: String,
  attachments: Array,
  updated_at: Date,
  created_at: Date,
});

export const Message = model("messages", MessageSchema);
