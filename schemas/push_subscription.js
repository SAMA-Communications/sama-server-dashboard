import { model, Schema } from "mongoose";

export const PushSubscriptionSchema = new Schema({
  _id: String,
  user_id: String,
  platform: String,
  web_endpoint: String,
  web_key_auth: String,
  web_key_p256dh: String,
  device_udid: String,
  updated_at: Date,
  created_at: Date,
});

export const PushSubscription = model(
  "push_subscriptions",
  PushSubscriptionSchema
);
