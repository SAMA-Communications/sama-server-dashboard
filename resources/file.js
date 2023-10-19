import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { FileSchema } from "../schemas/file.js";

const commonOptions = {};

const File = {
  resource: dbProd.model("file", FileSchema),
  options: {
    id: "file",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const File_ = {
  resource: dbDev.model("file", FileSchema),
  options: {
    id: "file_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { File, File_ };
