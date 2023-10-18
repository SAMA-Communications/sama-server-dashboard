import { model, Schema } from "mongoose";

export const BlockedUserSchema = new Schema({
  blocked_user_id: { type: "Number", required: true },
  user_id: { type: "String", required: true },
  updated_at: { type: "Date" },
  created_at: { type: "Date" },
});

export const BlockedUser = model("blocked_users", BlockedUserSchema);
