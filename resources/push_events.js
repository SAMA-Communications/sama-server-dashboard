import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";

const collectionName = "push_events";
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
  actions: {
    edit: {
      isAccessible: false,
      isVisible: true,
    },
  },
  showProperties: fields,
};

const PushEvents = {
  resource: dbProd.model(collectionName, PushEventSchema),
  options: {
    id: "push_events",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const PushEvents_ = {
  resource: dbDev.model(collectionName, PushEventSchema),
  options: {
    id: "push_events_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { PushEvents, PushEvents_ };
