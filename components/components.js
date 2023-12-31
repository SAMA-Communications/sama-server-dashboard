import path from "path";
import { ComponentLoader } from "adminjs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentLoader = new ComponentLoader();

const Components = {
  // -- dashboard
  Dashboard: componentLoader.add(
    "Dashboard",
    path.resolve(__dirname, "./dashboard/Dashboard")
  ),
  TopBar: componentLoader.override(
    "TopBar",
    path.resolve(__dirname, "./dashboard/TopBar")
  ),
  // -- users
  ShortcutIdView: componentLoader.add(
    "ShortcutIdView",
    path.resolve(__dirname, "./users/ShortcutIdView")
  ),
  BlockEmailShow: componentLoader.add(
    "BlockEmailShow",
    path.resolve(__dirname, "./users/BlockEmailShow")
  ),
  BlockPhoneShow: componentLoader.add(
    "BlockPhoneShow",
    path.resolve(__dirname, "./users/BlockPhoneShow")
  ),
  ShortcutEmailView: componentLoader.add(
    "ShortcutEmailView",
    path.resolve(__dirname, "./users/ShortcutEmailView")
  ),
  ShortcutPhoneView: componentLoader.add(
    "ShortcutPhoneView",
    path.resolve(__dirname, "./users/ShortcutPhoneView")
  ),
  BlockRecentActivityShow: componentLoader.add(
    "BlockRecentActivityShow",
    path.resolve(__dirname, "./users/BlockRecentActivityShow")
  ),
  ShortcutRecentActivityView: componentLoader.add(
    "ShortcutRecentActivityView",
    path.resolve(__dirname, "./users/ShortcutRecentActivityView")
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
  // -- messages
  ShortcutBodyView: componentLoader.add(
    "ShortcutBodyView",
    path.resolve(__dirname, "./messages/ShortcutBodyView")
  ),
  BlockBodyShow: componentLoader.add(
    "BlockBodyShow",
    path.resolve(__dirname, "./messages/BlockBodyShow")
  ),
  ShortcutAttachmentsView: componentLoader.add(
    "ShortcutAttachmentsView",
    path.resolve(__dirname, "./messages/ShortcutAttachmentsView")
  ),
  BlockAttachmentsShow: componentLoader.add(
    "BlockAttachmentsShow",
    path.resolve(__dirname, "./messages/BlockAttachmentsShow")
  ),
  BlockFromShow: componentLoader.add(
    "BlockFromShow",
    path.resolve(__dirname, "./messages/BlockFromShow")
  ),
  BlockCidShow: componentLoader.add(
    "BlockCidShow",
    path.resolve(__dirname, "./messages/BlockCidShow")
  ),
  // -- message_statuses
  BlockMidShow: componentLoader.add(
    "BlockMidShow",
    path.resolve(__dirname, "./message_statuses/BlockMidShow")
  ),
  // -- files
  BlockObjectIdShow: componentLoader.add(
    "BlockObjectIdShow",
    path.resolve(__dirname, "./files/BlockObjectIdShow")
  ),
  ShortcutObjectIdView: componentLoader.add(
    "ShortcutObjectIdView",
    path.resolve(__dirname, "./files/ShortcutObjectIdView")
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
  // -- conversations_participants
  BlockConversationIdShow: componentLoader.add(
    "BlockConversationIdShow",
    path.resolve(
      __dirname,
      "./conversations_participants/BlockConversationIdShow"
    )
  ),
  BlockUserIdShow: componentLoader.add(
    "BlockUserIdShow",
    path.resolve(__dirname, "./conversations_participants/BlockUserIdShow")
  ),
  // -- conversations
  ShortcutDescriptionView: componentLoader.add(
    "ShortcutDescriptionView",
    path.resolve(__dirname, "./conversations/ShortcutDescriptionView")
  ),
  BlockDescriptionShow: componentLoader.add(
    "BlockDescriptionShow",
    path.resolve(__dirname, "./conversations/BlockDescriptionShow")
  ),
  BlockOwnerIdShow: componentLoader.add(
    "BlockOwnerIdShow",
    path.resolve(__dirname, "./conversations/BlockOwnerIdShow")
  ),
  BlockOpponentIdShow: componentLoader.add(
    "BlockOpponentIdShow",
    path.resolve(__dirname, "./conversations/BlockOpponentIdShow")
  ),
  ShortcutTypeView: componentLoader.add(
    "ShortcutTypeView",
    path.resolve(__dirname, "./conversations/ShortcutTypeView")
  ),
  BlockTypeShow: componentLoader.add(
    "BlockTypeShow",
    path.resolve(__dirname, "./conversations/BlockTypeShow")
  ),
  BlockParticipantsShow: componentLoader.add(
    "BlockParticipantsShow",
    path.resolve(__dirname, "./conversations/BlockParticipantsShow")
  ),
  ShortcutParticipantsView: componentLoader.add(
    "ShortcutParticipantsView",
    path.resolve(__dirname, "./conversations/ShortcutParticipantsView")
  ),
};

export { componentLoader, Components };
