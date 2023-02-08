const EventEmitter = require("events");
const http = require("http");

// class Sales extends EventEmitter {
//   constructor() {
//     super();
//   }
// }

// const myEmitter = new Sales();

// myEmitter.on("new sale", () => {
//   console.log("there was a new sale");
// });

// myEmitter.on("new sale", () => {
//   console.log("customer name daniel");
// });

// myEmitter.on("newSale", (stock) => {
//   console.log(`there are now ${stock} items left in stock`);
// });

// myEmitter.emit("newSale", 9);

// //////
const server = http.createServer();
server.on("request", (req, res) => {
  console.log("request received");
  res.end("request received");
});

server.on("request", (req, res) => {
  console.log("another request");
});

server.on("close", (req, res) => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for request...");
});
