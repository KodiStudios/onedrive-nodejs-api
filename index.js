const { Client } = require("@microsoft/microsoft-graph-client");
const argv = require("minimist")(process.argv.slice(2));

if (!argv.token) {
  console.log("Usage: ");
  console.log("node index.js --token {token_value_from_aka.ms/ge}");
  return;
}

const graphClient = Client.init({
  defaultVersion: "v1.0",
  debugLogging: true,
  authProvider: (done) => {
    const errorMessage = "error throw by the authentication handler";
    done(errorMessage, argv.token);
  },
});

graphClient
  .api("/me")
  .select("displayName")
  .get()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
