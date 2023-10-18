import { model, Schema } from "mongoose";

export const ContactSchema = new Schema({
  first_name: { type: "String" },
  last_name: { type: "String" },
  company: { type: "String" },
  matched_user_id: { type: "String" },
  email: { type: "String" },
  phone: { type: "String" },
  updated_at: { type: "Date" },
  created_at: { type: "Date" },
});

export const Contact = model("contacts", ContactSchema);
