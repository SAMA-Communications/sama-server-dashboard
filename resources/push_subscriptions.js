import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";

const collectionName = "push_subscriptions";
const PushSubscriptionSchema = new Schema({
  user_id: String,
  platform: String,
  web_endpoint: String,
  web_key_auth: String,
  web_key_p256dh: String,
  device_udid: String,
  updated_at: Date,
  created_at: Date,
});

const fields = [
  "_id",
  "user_id",
  "platform",
  "web_endpoint",
  "web_key_auth",
  "web_key_p256dh",
  "device_udid",
  "updated_at",
  "created_at",
];

const commonOptions = {
  listProperties: fields,
  filterProperties: fields,
  editProperties: fields.slice(1),
  showProperties: fields,
};

const PushSubscriptions = {
  resource: dbProd.model(collectionName, PushSubscriptionSchema),
  options: {
    id: "push_subscriptions",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const PushSubscriptions_ = {
  resource: dbDev.model(collectionName, PushSubscriptionSchema),
  options: {
    id: "push_subscriptions_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { PushSubscriptions, PushSubscriptions_ };
