import { model, Schema } from "mongoose";

export const UserSchema = new Schema({
  login: { type: "String", required: true },
  email: { type: "String" },
  phone: { type: "String" },
  recent_activity: { type: "Number" },
  first_name: { type: "String" },
  last_name: { type: "String" },
  updated_at: { type: "Date" },
  created_at: { type: "Date" },
});

export const User = model("users", UserSchema);
