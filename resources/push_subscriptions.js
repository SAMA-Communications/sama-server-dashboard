import db from "./db/db.js";
import dbTest from "./db/db_test.js";
import { PushSubscriptionSchema } from "../schemas/push_subscription.js";

const commonOptions = {};

const PushSubscriptions = {
  resource: db.model("push_subscriptions", PushSubscriptionSchema),
  options: {
    id: "push_subscriptions",
    ...commonOptions,
  },
};

const PushSubscriptions_ = {
  resource: dbTest.model("push_subscriptions", PushSubscriptionSchema),
  options: {
    id: "push_subscriptions_",
    ...commonOptions,
  },
};

export { PushSubscriptions, PushSubscriptions_ };
