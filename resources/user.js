import { User } from "../entities/users.js";

import { Components } from "../components/components.js";

const UserResource = {
  resource: User,
  options: {
    properties: {
      content: {
        components: {
          edit: Components.MyEditBlock,
        },
      },
    },
    listProperties: [
      "_id",
      "login",
      "email",
      "phone",
      "recent_activity",
      "first_name",
      "last_name",
      "updated_at",
      "created_at",
    ],
    editProperties: ["email", "phone", "first_name", "last_name"],
  },
};

export default UserResource;
