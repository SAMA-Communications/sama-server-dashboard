import { model, Schema } from "mongoose";

export const FileSchema = new Schema({
  _id: String,
  name: String,
  size: String,
  content_type: String,
  object_id: String,
  updated_at: Date,
  created_at: Date,
});

export const File = model("files", FileSchema);
