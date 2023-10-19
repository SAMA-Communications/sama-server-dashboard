import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { PushSubscriptionSchema } from "../schemas/push_subscription.js";

const commonOptions = {};

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
