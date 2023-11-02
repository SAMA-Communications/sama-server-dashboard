import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { Components } from "../components/components.js";
import { ObjectId } from "./db/ObjectId.js";
import { paramConverter, populator } from "adminjs";

const collectionName = "user_tokens";
export const UserTokenSchema = new Schema({
  user_id: ObjectId,
  device_id: String,
  token: String,
  updated_at: Date,
  created_at: Date,
});

const fields = [
  "_id",
  "user_id",
  "device_id",
  "token",
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
    token: {
      type: "string",
      components: {
        list: Components.ShortcutTokenView,
        show: Components.BlockTokenShow,
      },
    },
    user_id: {
      type: "string",
      components: {
        show: Components.BlockUserIdShow,
      },
    },
  },

  actions: {
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

const UserTokens = {
  resource: dbProd.model(collectionName, UserTokenSchema),
  options: {
    id: "user_tokens",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const UserTokens_ = {
  resource: dbDev.model(collectionName, UserTokenSchema),
  options: {
    id: "user_tokens_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { UserTokens, UserTokens_ };
