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
import { Components, componentLoader } from "./components/components.js";

dotenv.config();
AdminJS.registerAdapter({ Resource, Database });

const start = async () => {
  const app = express();

  const adminOptions = {
    rootPath: "/",
    loginPath: "/login",
    logoutPath: "/logout",

    // dashboard: {
    //   component: Components.Dashboard,
    // },
    componentLoader,

    branding: {
      companyName: "SAMA",
      softwareBrothers: false,
      logo: `https://raw.githubusercontent.com/SAMA-Communications/sama-server-dashboard/main/assets/logo.png?token=GHSAT0AAAAAACHYG45VOXOWSNZJB2B3UWB2ZJW2WLA`,
    },
    locale: {
      translations: {
        messages: {
          loginWelcome: "1", // the smaller text
        },
        labels: {
          loginWelcome: "2", // this could be your project name
        },
      },
    },

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

    assets: {
      styles: ["/index.css"],
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
