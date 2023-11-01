import Schema from "./db/Shema.js";
import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { Components } from "../components/components.js";
import { ObjectId } from "./db/ObjectId.js";
import { paramConverter, populator } from "adminjs";

const collectionName = "conversations";
const ConversationSchema = new Schema({
  name: String,
  type: String,
  description: String,
  owner_id: ObjectId,
  opponent_id: String,
  participants: Array,
  updated_at: Date,
  created_at: Date,
});

const fields = [
  "_id",
  "name",
  "type",
  "description",
  "owner_id",
  "opponent_id",
  "participants",
  "updated_at",
  "created_at",
];

const commonOptions = {
  listProperties: fields,
  filterProperties: fields,
  editProperties: ["name", "description", "owner_id", "participants"],
  showProperties: fields,

  properties: {
    _id: {
      type: "string",
      components: {
        list: Components.ShortcutIdView,
      },
    },
    description: {
      type: "string",
      components: {
        list: Components.ShortcutDescriptionView,
        show: Components.BlockDescriptionShow,
      },
    },
    owner_id: {
      type: "string",
      components: {
        show: Components.BlockOwnerIdShow,
      },
    },
    opponent_id: {
      type: "string",
      components: {
        show: Components.BlockOpponentIdShow,
      },
    },
    type: {
      type: "string",
      components: {
        list: Components.ShortcutTypeView,
        show: Components.BlockTypeShow,
      },
    },
    participants: {
      type: "string",
      components: {
        list: Components.ShortcutParticipantsView,
        show: Components.BlockParticipantsShow,
        edit: Components.BlockParticipantsEdit,
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
        console.log(record);
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

const Conversations = {
  resource: dbProd.model(collectionName, ConversationSchema),
  options: {
    id: "conversations",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const Conversations_ = {
  resource: dbDev.model(collectionName, ConversationSchema),
  options: {
    id: "conversations_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { Conversations, Conversations_ };
