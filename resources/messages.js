import db from "./db/db.js";
import dbTest from "./db/db_test.js";
import { MessageSchema } from "../schemas/message.js";

const commonOptions = {};

const Messages = {
  resource: db.model("messages", MessageSchema),
  options: {
    id: "messages",
    ...commonOptions,
  },
};

const Messages_ = {
  resource: dbTest.model("messages", MessageSchema),
  options: {
    id: "messages_",
    ...commonOptions,
  },
};

export { Messages, Messages_ };
