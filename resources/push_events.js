import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { PushEventSchema } from "../schemas/push_event.js";

const commonOptions = {};

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
