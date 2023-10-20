import path from "path";
import { ComponentLoader } from "adminjs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentLoader = new ComponentLoader();

const Components = {
  // -- users
  ShortcutIdView: componentLoader.add(
    "ShortcutIdView",
    path.resolve(__dirname, "./users/ShortcutIdView")
  ),
  // -- user_tokens
  BlockTokenShow: componentLoader.add(
    "BlockTokenShow",
    path.resolve(__dirname, "./user_tokens/BlockTokenShow")
  ),
  ShortcutTokenView: componentLoader.add(
    "ShortcutTokenView",
    path.resolve(__dirname, "./user_tokens/ShortcutTokenView")
  ),
  // -- push_subscriptions
  ShortcutWebEndpointView: componentLoader.add(
    "ShortcutWebEndpointView",
    path.resolve(__dirname, "./push_subscriptions/ShortcutWebEndpointView")
  ),
  BlockWebEndpointShow: componentLoader.add(
    "BlockWebEndpointShow",
    path.resolve(__dirname, "./push_subscriptions/BlockWebEndpointShow")
  ),
  ShortcutWebKeyAuthView: componentLoader.add(
    "ShortcutWebKeyAuthView",
    path.resolve(__dirname, "./push_subscriptions/ShortcutWebKeyAuthView")
  ),
  ShortcutWebKeyP256DhView: componentLoader.add(
    "ShortcutWebKeyP256DhView",
    path.resolve(__dirname, "./push_subscriptions/ShortcutWebKeyP256DhView")
  ),
  BlockWebKeyP256DhShow: componentLoader.add(
    "BlockWebKeyP256DhShow",
    path.resolve(__dirname, "./push_subscriptions/BlockWebKeyP256DhShow")
  ),
};

export { componentLoader, Components };
