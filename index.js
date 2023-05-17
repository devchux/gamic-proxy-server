const http = require("http");
const app = require("./src/app");

const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port, () => {
  console.log("App is running on port: ", port);
});
