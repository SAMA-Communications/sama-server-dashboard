import dbDev, { dbDevNavigation } from "./db/db_dev.js";
import dbProd, { dbProdNavigation } from "./db/db_prod.js";
import { ClusterNodeSchema } from "../schemas/cluster_node.js";

const fields = [
  "_id",
  "ip_address",
  "hostname",
  "port",
  "users_count",
  "updated_at",
  "created_at",
];

const commonOptions = {
  listProperties: fields,
  filterProperties: fields,
  editProperties: ["ip_address", "hostname", "port", "users_count"],
  showProperties: fields,
};

const ClusterNodes = {
  resource: dbProd.model("cluster_nodes", ClusterNodeSchema),
  options: {
    id: "cluster_nodes",
    navigation: dbProdNavigation,
    ...commonOptions,
  },
};

const ClusterNodes_ = {
  resource: dbDev.model("cluster_nodes", ClusterNodeSchema),
  options: {
    id: "cluster_nodes_",
    navigation: dbDevNavigation,
    ...commonOptions,
  },
};

export { ClusterNodes, ClusterNodes_ };
