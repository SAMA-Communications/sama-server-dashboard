import { model, Schema } from "mongoose";

export const UserSchema = new Schema({
  _id: String,
  login: String,
  email: String,
  phone: String,
  recent_activity: Number,
  first_name: String,
  last_name: String,
  updated_at: Date,
  created_at: Date,
});

export const User = model("users", UserSchema);
