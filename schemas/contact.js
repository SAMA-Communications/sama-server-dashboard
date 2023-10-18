import { model, Schema } from "mongoose";

export const ContactSchema = new Schema({
  _id: String,
  first_name: String,
  last_name: String,
  company: String,
  email: String,
  phone: String,
  updated_at: Date,
  created_at: Date,
});

export const Contact = model("contacts", ContactSchema);
