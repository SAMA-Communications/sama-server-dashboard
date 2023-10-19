import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { PushSubscriptionSchema } from "../schemas/push_subscription.js";

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
  editProperties: [
    "platform",
    "web_endpoint",
    "web_key_auth",
    "web_key_p256dh",
  ],
  showProperties: fields,
};

const PushSubscriptions = {
  resource: dbProd.model("push_subscriptions", PushSubscriptionSchema),
  options: {
    id: "push_subscriptions",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const PushSubscriptions_ = {
  resource: dbDev.model("push_subscriptions", PushSubscriptionSchema),
  options: {
    id: "push_subscriptions_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { PushSubscriptions, PushSubscriptions_ };
