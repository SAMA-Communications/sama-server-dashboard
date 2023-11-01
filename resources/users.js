import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { Components } from "../components/components.js";

const collectionName = "users";
const UserSchema = new Schema({
  login: String,
  email: String,
  phone: String,
  recent_activity: Number,
  first_name: String,
  last_name: String,
  updated_at: Date,
  created_at: Date,
});

const fields = [
  "_id",
  "login",
  "email",
  "phone",
  "recent_activity",
  "first_name",
  "last_name",
  "updated_at",
  "created_at",
];

const commonOptions = {
  listProperties: fields,
  filterProperties: fields,
  editProperties: ["login", "email", "phone", "first_name", "last_name"],
  showProperties: fields,

  properties: {
    _id: {
      type: "string",
      components: {
        list: Components.ShortcutIdView,
      },
    },
    email: {
      type: "string",
      components: {
        list: Components.ShortcutEmailView,
        show: Components.BlockEmailShow,
      },
    },
    phone: {
      type: "string",
      components: {
        list: Components.ShortcutPhoneView,
        show: Components.BlockPhoneShow,
      },
    },
  },

  // actions: {
  //   edit: {
  //     actionType: "record",
  //     handler: async (request, response, context) => {
  //       console.log(123);
  //       const { record, currentAdmin } = context;
  //       return {
  //         record: record.toJSON(currentAdmin),
  //       };
  //     },
  //   },
  // },
};

const Users = {
  resource: dbProd.model(collectionName, UserSchema),
  options: {
    id: "users",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const Users_ = {
  resource: dbDev.model(collectionName, UserSchema),
  options: {
    id: "users_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { Users, Users_ };
