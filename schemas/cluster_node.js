import { model, Schema } from "mongoose";

export const ClusterNodeSchema = new Schema({
  ip_address: String,
  hostname: String,
  port: String,
  users_count: String,
  updated_at: Date,
  created_at: Date,
});

export const ClusterNode = model("cluster_nodes", ClusterNodeSchema);
