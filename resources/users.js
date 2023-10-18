// import { Components } from "../components/components.js";
import { User } from "../schemas/User.js";

const UserResource = {
  resource: User,
  options: {
    // properties: {
    //   content: {
    //     components: {
    //       edit: Components.MyEditBlock,
    //     },
    //   },
    // },
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
