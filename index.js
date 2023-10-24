import * as url from "url";
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { ObjectId } from "./resources/db/ObjectId.js";
import { Resource, Database } from "@adminjs/mongoose";

// -- resources
import { Users, Users_ } from "./resources/users.js";
import { UserTokens, UserTokens_ } from "./resources/user_tokens.js";
import { PushEvents, PushEvents_ } from "./resources/push_events.js";
import {
  PushSubscriptions,
  PushSubscriptions_,
} from "./resources/push_subscriptions.js";
import { Messages, Messages_ } from "./resources/messages.js";
import {
  MessageStatuses,
  MessageStatuses_,
} from "./resources/message_statuses.js";
import { Files, Files_ } from "./resources/files.js";
import { Conversations, Conversations_ } from "./resources/conversations.js";
import {
  ConversationsParticipants,
  ConversationsParticipants_,
} from "./resources/conversations_participants.js";
import { Contacts, Contacts_ } from "./resources/contacts.js";
import { ClusterNodes, ClusterNodes_ } from "./resources/cluster_nodes.js";
import { BlockedUsers, BlockedUsers_ } from "./resources/blocked_users.js";

// -- components
import { dashboardHandler } from "./handlers/dashboard.handler.js";
import { Components, componentLoader } from "./components/components.js";

dotenv.config();
AdminJS.registerAdapter({ Resource, Database });

const start = async () => {
  const app = express();

  const adminOptions = {
    rootPath: "/",
    loginPath: "/login",
    logoutPath: "/logout",

    dashboard: {
      component: Components.Dashboard,
      handler: dashboardHandler,
    },
    componentLoader,

    resources: [
      ...[Users, Users_],
      ...[UserTokens, UserTokens_],
      ...[PushSubscriptions, PushSubscriptions_],
      ...[PushEvents, PushEvents_],
      ...[Messages, Messages_],
      ...[MessageStatuses, MessageStatuses_],
      ...[Files, Files_],
      ...[Conversations, Conversations_],
      ...[ConversationsParticipants, ConversationsParticipants_],
      ...[Contacts, Contacts_],
      ...[ClusterNodes, ClusterNodes_],
      ...[BlockedUsers, BlockedUsers_],
    ],

    branding: {
      companyName: "SAMAPANEL",
      softwareBrothers: false,
      withMadeWithLove: false,
      favicon: `https://samacloud.io/favicon/favicon-32x32.png`,
      //need to post local
      logo: "https://github-production-user-asset-6210df.s3.amazonaws.com/98953475/277474840-f587d6fb-ea42-4205-91e4-701ca9f512ec.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20231023%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231023T205409Z&X-Amz-Expires=300&X-Amz-Signature=469997d2cc252c5a90716ac7f5863d51642ec2469ebe691e8c5be858715791c7&X-Amz-SignedHeaders=host&actor_id=98953475&key_id=0&repo_id=702441555",
    },

    locale: {
      debug: false,
      translations: {
        en: {
          labels: {
            navigation: "Databases",
          },
          components: {
            Login: {
              welcomeHeader: "",
              welcomeMessage: "",
              properties: {
                email: "Login",
                password: "Password",
              },
              loginButton: "Login",
            },
          },
          messages: {
            welcomeOnBoard_title: "Welcome on SAMA server dashboard!",
            welcomeOnBoard_subtitle: "",
          },
        },
      },
    },

    assets: {
      styles: ["./index.css"],
    },
  };
  const admin = new AdminJS(adminOptions);

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate: async (email, password) => {
        return email === process.env.ADMIN_EMAIL &&
          password === process.env.ADMIN_PASSWORD
          ? Promise.resolve({ email, password })
          : null;
      },
      cookieName: process.env.COOKIE_NAME,
      cookiePassword: process.env.COOKIE_PASSWORD,
    },
    null,
    {
      resave: true,
      saveUninitialized: true,
      secret: process.env.COOKIE_PASSWORD,
    }
  );
  app.use(admin.options.rootPath, adminRouter);

  app.get("/getParticipantsByCid", async function (req, res) {
    if (!req.query.cid || req.query.cid === "undefined") {
      return;
    }

    const participants = await (+req.query.isDev
      ? ConversationsParticipants_
      : ConversationsParticipants
    ).resource.find({ conversation_id: new ObjectId(req.query.cid) });

    res.send(participants);
  });

  const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
  app.use(express.static(path.join(__dirname, "/styles")));

  app.listen(process.env.APP_PORT, () => {
    console.log(
      `Admin panel started on http://localhost:${process.env.APP_PORT}${admin.options.rootPath}`
    );
  });
};

start();
