import { Client } from "@microsoft/microsoft-graph-client";
import { parseArgs } from "node:util";

const { values } = parseArgs({
  options: {
    token: { type: "string" },
  },
});

if (!values.token) {
  console.log("Usage:");
  console.log("  node index.ts --token <token_from_graph_explorer>");
  console.log();
  console.log("Get a token at: https://developer.microsoft.com/en-us/graph/graph-explorer");
  process.exit(1);
}

const graphClient = Client.init({
  defaultVersion: "v1.0",
  authProvider: (done) => {
    done(null, values.token!);
  },
});

// Profile API
const profile = await graphClient.api("/me").select("displayName").get();
console.log("Profile:", profile);

// OneDrive API - list root folder contents
const driveItems = await graphClient.api("/me/drive/root/children").get();
console.log("Drive root contents:", driveItems);
