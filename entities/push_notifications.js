import { model, Schema } from "mongoose";

export const PushNotificationSchema = new Schema({
  platform: { type: "String", required: true },
  web_endpoint: { type: "String", required: true },
  web_key_auth: { type: "String", required: true },
  web_key_p256dh: { type: "String", required: true },
  device_udid: { type: "String", required: true },
  user_id: { type: "ObjectId", required: true },
  updated_at: { type: "Date" },
  created_at: { type: "Date" },
});

export const PushNotification = model(
  "push_subscriptions",
  PushNotificationSchema
);
