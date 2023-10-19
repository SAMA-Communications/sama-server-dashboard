import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { FileSchema } from "../schemas/file.js";

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
  editProperties: ["name", "size", "content_type", "object_id"],
  showProperties: fields,
};

const Files = {
  resource: dbProd.model("files", FileSchema),
  options: {
    id: "files",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const Files_ = {
  resource: dbDev.model("files", FileSchema),
  options: {
    id: "files_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { Files, Files_ };
