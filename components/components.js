import path from "path";
import { ComponentLoader } from "adminjs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentLoader = new ComponentLoader();

const Components = {
  ShortcutIdView: componentLoader.add(
    "ShortcutIdView",
    path.resolve(__dirname, "./users/ShortcutIdView")
  ),
  ShortcutWebEndpointView: componentLoader.add(
    "ShortcutWebEndpointView",
    path.resolve(__dirname, "./push_subscriptions/ShortcutWebEndpointView")
  ),
  ShortcutWebEndpointShow: componentLoader.add(
    "ShortcutWebEndpointShow",
    path.resolve(__dirname, "./push_subscriptions/ShortcutWebEndpointShow")
  ),
  ShortcutWebKeyAuthView: componentLoader.add(
    "ShortcutWebKeyAuthView",
    path.resolve(__dirname, "./push_subscriptions/ShortcutWebKeyAuthView")
  ),
  ShortcutWebKeyP256DhView: componentLoader.add(
    "ShortcutWebKeyP256DhView",
    path.resolve(__dirname, "./push_subscriptions/ShortcutWebKeyP256DhView")
  ),
  ShortcutWebKeyP256DhShow: componentLoader.add(
    "ShortcutWebKeyP256DhShow",
    path.resolve(__dirname, "./push_subscriptions/ShortcutWebKeyP256DhShow")
  ),
};

export { componentLoader, Components };
