import { model, Schema } from "mongoose";

export const UserTokenSchema = new Schema({
  user_id: String,
  device_id: String,
  token: String,
  updated_at: Date,
  created_at: Date,
});

export const UserToken = model("user_tokens", UserTokenSchema);
