import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import dotenv from "dotenv";
import express from "express";
import { Resource, Database } from "@adminjs/mongoose";

// -- database
import db from "./resources/db/db.js";

//  -- resources
import UsersResource from "./resources/users.js";

// -- custom components
// import { Components, componentLoader } from "./components/components.js";

dotenv.config();
AdminJS.registerAdapter({ Resource, Database });

const DEFAULT_ADMIN = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD,
};

const start = async () => {
  const app = express();

  const adminOptions = {
    rootPath: "/",
    loginPath: "/login",
    logoutPath: "/logout",
    branding: {
      companyName: "SAMA",
    },

    // dashboard: {
    //   component: Components.Dashboard,
    // },
    // componentLoader,

    resources: [UsersResource],
  };
  const admin = new AdminJS(adminOptions);

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate: async (email, password) => {
        if (
          email === DEFAULT_ADMIN.email &&
          password === DEFAULT_ADMIN.password
        ) {
          return Promise.resolve(DEFAULT_ADMIN);
        }
        return null;
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

  app.listen(process.env.APP_PORT, () => {
    console.log(
      `Admin panel started on http://localhost:${process.env.APP_PORT}${admin.options.rootPath}`
    );
  });
};

start();
