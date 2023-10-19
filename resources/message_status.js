import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { MessageStatusSchema } from "../schemas/message_status.js";

const commonOptions = {};

const MessageStatus = {
  resource: dbProd.model("message_status", MessageStatusSchema),
  options: {
    id: "message_status",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const MessageStatus_ = {
  resource: dbDev.model("message_status", MessageStatusSchema),
  options: {
    id: "message_status_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { MessageStatus, MessageStatus_ };
