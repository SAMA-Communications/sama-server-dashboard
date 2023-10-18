import db from "./db/db.js";
import dbTest from "./db/db_test.js";
import { ContactSchema } from "../schemas/contact.js";

const commonOptions = {};

const Contacts = {
  resource: db.model("contacts", ContactSchema),
  options: {
    id: "contacts",
    ...commonOptions,
  },
};

const Contacts_ = {
  resource: dbTest.model("contacts", ContactSchema),
  options: {
    id: "contacts_",
    ...commonOptions,
  },
};

export { Contacts, Contacts_ };
