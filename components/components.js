import path from "path";
import { fileURLToPath } from "url";

import { ComponentLoader } from "adminjs";

const componentLoader = new ComponentLoader();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Components = {
  //   MyEditBlock: componentLoader.add(
  //     "MyEditBlock",
  //     path.resolve(__dirname, "edit_block")
  //   ),
  Dashboard: componentLoader.add(
    "Dashboard",
    path.resolve(__dirname, "./dashboard")
  ),
};

export { componentLoader, Components };
