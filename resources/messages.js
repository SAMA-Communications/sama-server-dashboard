import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { Components } from "../components/components.js";
import { ObjectId } from "./db/ObjectId.js";
import { paramConverter, populator } from "adminjs";

const collectionName = "messages";
const MessageSchema = new Schema({
  t: Number,
  from: ObjectId,
  body: String,
  cid: ObjectId,
  x: Object,
  attachments: Array,
  updated_at: Date,
  created_at: Date,
});

const fields = [
  "_id",
  "t",
  "from",
  "body",
  "cid",
  "x",
  "attachments",
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
    body: {
      type: "string",
      components: {
        list: Components.ShortcutBodyView,
        show: Components.BlockBodyShow,
      },
    },
    attachments: {
      type: "string",
      components: {
        list: Components.ShortcutAttachmentsView,
        show: Components.BlockAttachmentsShow,
      },
    },
    from: {
      type: "string",
      components: {
        show: Components.BlockFromShow,
      },
    },
    cid: {
      type: "string",
      components: {
        show: Components.BlockCidShow,
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

const Messages = {
  resource: dbProd.model(collectionName, MessageSchema),
  options: {
    id: "messages",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const Messages_ = {
  resource: dbDev.model(collectionName, MessageSchema),
  options: {
    id: "messages_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { Messages, Messages_ };
