import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import Schema from "./db/Shema.js";

const PushEventSchema = new Schema({
  user_id: String,
  recipients_ids: Array, // check
  message: Object, // check
  updated_at: Date,
  created_at: Date,
});

const fields = [
  "_id",
  "user_id",
  "recipients_ids",
  "message",
  "updated_at",
  "created_at",
];

const commonOptions = {
  listProperties: fields,
  filterProperties: fields,
  editProperties: ["recipients_ids", "message"],
  showProperties: fields,
};

const PushEvents = {
  resource: dbProd.model("push_events", PushEventSchema),
  options: {
    id: "push_events",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const PushEvents_ = {
  resource: dbDev.model("push_events", PushEventSchema),
  options: {
    id: "push_events_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { PushEvents, PushEvents_ };
