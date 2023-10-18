import { model, Schema } from "mongoose";

export const BlockedUserSchema = new Schema({
  _id: String,
  blocked_user_id: String,
  user_id: String,
  updated_at: Date,
  created_at: Date,
});

export const BlockedUser = model("blocked_users", BlockedUserSchema);
