import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";

const collectionName = "files";
const FileSchema = new Schema({
  name: String,
  size: String,
  content_type: String,
  object_id: String,
  updated_at: Date,
  created_at: Date,
});

const fields = [
  "_id",
  "name",
  "size",
  "content_type",
  "object_id",
  "updated_at",
  "created_at",
];

const commonOptions = {
  listProperties: fields,
  filterProperties: fields,
  editProperties: fields.slice(1),
  showProperties: fields,
};

const Files = {
  resource: dbProd.model(collectionName, FileSchema),
  options: {
    id: "files",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const Files_ = {
  resource: dbDev.model(collectionName, FileSchema),
  options: {
    id: "files_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { Files, Files_ };
