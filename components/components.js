import path from "path";
import { ComponentLoader } from "adminjs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentLoader = new ComponentLoader();

const Components = {
  UserIdFieldView: componentLoader.add(
    "UserIdFieldView",
    path.resolve(__dirname, "./fields/UserIdFieldView")
  ),
};

export { componentLoader, Components };
