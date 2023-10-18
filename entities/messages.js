import { model, Schema } from "mongoose";

export const MessageSchema = new Schema({
  id: { type: "String", required: true },
  body: { type: "String" },
  cid: { type: "ObjectId", required: true },
  from: { type: "ObjectId", required: true },
  deleted_for: { type: "Array" },
  attachments: { type: "Array" },
  t: { type: "String", required: true },
  updated_at: { type: "Date" },
  created_at: { type: "Date" },
});

export const Message = model("messages", MessageSchema);
