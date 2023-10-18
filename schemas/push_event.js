import { model, Schema } from "mongoose";

export const PushEventSchema = new Schema({
  _id: String,
  user_id: String,
  recipients_ids: Array, // check
  message: Object, // check
  updated_at: Date,
  created_at: Date,
});

export const PushEvent = model("push_events", PushEventSchema);
