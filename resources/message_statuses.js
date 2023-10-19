import db from "./db/db.js";
import dbTest from "./db/db_test.js";
import { MessageStatusSchema } from "../schemas/message_status.js";

const fields = [];

const commonOptions = {};

const MessageStatuses = {
  resource: db.model("message_status", MessageStatusSchema),
  options: {
    id: "message_status",
    ...commonOptions,
  },
};

const MessageStatuses_ = {
  resource: dbTest.model("message_status", MessageStatusSchema),
  options: {
    id: "message_status_",
    ...commonOptions,
  },
};

export { MessageStatuses, MessageStatuses_ };
