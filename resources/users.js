import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { Components } from "../components/components.js";
import { paramConverter, populator } from "adminjs";

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

  actions: {
    new: {
      actionType: "resource",
      handler: async (request, response, context) => {
        const { resource, h, currentAdmin } = context;
        if (request.method === "post") {
          const params = paramConverter.prepareParams(
            request.payload ?? {},
            resource
          );
          params.recent_activity = Math.round(new Date() / 1000);
          !params.updated_at && (params.updated_at = new Date() / 1000);
          !params.created_at && (params.created_at = new Date() / 1000);

          let record = await resource.build(params);

          record = await record.create(context);
          const [populatedRecord] = await populator([record], context);

          // eslint-disable-next-line no-param-reassign
          context.record = populatedRecord;

          if (record.isValid()) {
            return {
              redirectUrl: h.resourceUrl({
                resourceId: resource._decorated?.id() || resource.id(),
              }),
              notice: {
                message: "successfullyCreated",
                type: "success",
              },
              record: record.toJSON(currentAdmin),
            };
          }
          const baseMessage =
            populatedRecord.baseError?.message || "thereWereValidationErrors";
          return {
            record: record.toJSON(currentAdmin),
            notice: {
              message: baseMessage,
              type: "error",
            },
          };
        }
        throw new Error(
          "new action can be invoked only via `post` http method"
        );
      },
    },
    edit: {
      name: "edit",
      actionType: "record",
      handler: async (request, response, context) => {
        const { record, resource, currentAdmin, h } = context;
        if (!record) {
          throw new NotFoundError(
            [
              `Record of given id ("${request.params.recordId}") could not be found`,
            ].join("\n"),
            "Action#handler"
          );
        }
        if (request.method === "get") {
          return { record: record.toJSON(currentAdmin) };
        }

        const params = paramConverter.prepareParams(
          request.payload ?? {},
          resource
        );
        params.updated_at = new Date();

        const newRecord = await record.update(params, context);
        const [populatedRecord] = await populator([newRecord], context);

        // eslint-disable-next-line no-param-reassign
        context.record = populatedRecord;

        if (record.isValid()) {
          return {
            redirectUrl: h.resourceUrl({
              resourceId: resource._decorated?.id() || resource.id(),
            }),
            notice: {
              message: "successfullyUpdated",
              type: "success",
            },
            record: populatedRecord.toJSON(currentAdmin),
          };
        }
        const baseMessage =
          populatedRecord.baseError?.message || "thereWereValidationErrors";
        return {
          record: populatedRecord.toJSON(currentAdmin),
          notice: {
            message: baseMessage,
            type: "error",
          },
        };
      },
    },
  },
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
