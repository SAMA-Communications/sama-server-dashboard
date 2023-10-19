import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { MessageStatusSchema } from "../schemas/message_status.js";

const commonOptions = {};

const MessageStatuses = {
  resource: dbProd.model("message_statuses", MessageStatusSchema),
  options: {
    id: "message_statuses",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const MessageStatuses_ = {
  resource: dbDev.model("message_statuses", MessageStatusSchema),
  options: {
    id: "message_statuses_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { MessageStatuses, MessageStatuses_ };
