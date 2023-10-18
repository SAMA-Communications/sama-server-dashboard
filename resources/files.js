import db from "./db/db.js";
import dbTest from "./db/db_test.js";
import { FileSchema } from "../schemas/file.js";

const commonOptions = {};

const Files = {
  resource: db.model("file", FileSchema),
  options: {
    id: "file",
    ...commonOptions,
  },
};

const Files_ = {
  resource: dbTest.model("file", FileSchema),
  options: {
    id: "file_",
    ...commonOptions,
  },
};

export { Files, Files_ };
