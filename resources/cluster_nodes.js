import db from "./db/db.js";
import dbTest from "./db/db_test.js";
import { ClusterNodeSchema } from "../schemas/cluster_node.js";

const commonOptions = {};

const ClusterNodes = {
  resource: db.model("cluster_nodes", ClusterNodeSchema),
  options: {
    id: "cluster_nodes",
    ...commonOptions,
  },
};

const ClusterNodes_ = {
  resource: dbTest.model("cluster_nodes", ClusterNodeSchema),
  options: {
    id: "cluster_nodes_",
    ...commonOptions,
  },
};

export { ClusterNodes, ClusterNodes_ };
