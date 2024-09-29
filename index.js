const { Client } = require("@microsoft/microsoft-graph-client");

const graphClient = Client.init({
  defaultVersion: "v1.0",
  debugLogging: true,
  authProvider: (done) => {
    const errorMessage = "error throw by the authentication handler";
    done(
      errorMessage,
      "TOKEN_HERE"
    );
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
