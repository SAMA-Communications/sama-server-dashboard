import db from "./db/db.js";
import dbTest from "./db/db_test.js";
import { PushEventSchema } from "../schemas/push_event.js";

const commonOptions = {};

const PushEvents = {
  resource: db.model("push_events", PushEventSchema),
  options: {
    id: "push_events",
    ...commonOptions,
  },
};

const PushEvents_ = {
  resource: dbTest.model("push_events", PushEventSchema),
  options: {
    id: "push_events_",
    ...commonOptions,
  },
};

export { PushEvents, PushEvents_ };
