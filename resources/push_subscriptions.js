import { Components } from "../components/components.js";
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
  actions: {
    edit: {
      isAccessible: false,
      isVisible: true,
    },
  },
  showProperties: fields,
  properties: {
    web_endpoint: {
      type: "string",
      components: {
        list: Components.ShortcutWebEndpointView,
        show: Components.BlockWebEndpointShow,
      },
    },
    web_key_auth: {
      type: "string",
      components: {
        list: Components.ShortcutWebKeyAuthView,
      },
    },
    web_key_p256dh: {
      type: "string",
      components: {
        list: Components.ShortcutWebKeyP256DhView,
        show: Components.BlockWebKeyP256DhShow,
      },
    },
    user_id: {
      type: "string",
      components: {
        show: Components.BlockUserIdShow,
      },
    },
  },
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
