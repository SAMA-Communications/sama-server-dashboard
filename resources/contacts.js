import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import Schema from "./db/Shema.js";

const ContactSchema = new Schema({
  first_name: String,
  last_name: String,
  company: String,
  email: String,
  phone: String,
  updated_at: Date,
  created_at: Date,
});

const fields = [
  "_id",
  "first_name",
  "last_name",
  "company",
  "email",
  "phone",
  "updated_at",
  "created_at",
];

const commonOptions = {
  listProperties: fields,
  filterProperties: fields,
  editProperties: ["first_name", "last_name", "company", "email", "phone"],
  showProperties: fields,
};

const Contacts = {
  resource: dbProd.model("contacts", ContactSchema),
  options: {
    id: "contacts",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const Contacts_ = {
  resource: dbDev.model("contacts", ContactSchema),
  options: {
    id: "contacts_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { Contacts, Contacts_ };
