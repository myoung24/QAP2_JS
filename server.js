const http = require("http");
const routes = require("./routes.js");

const EventEmitter = require("events");
class myEmitter extends EventEmitter {}
const MyEmitter = new myEmitter();

const DEBUG = false;

var statusCode;

const server = http.createServer((request, response) => {
  let path = "./views/";
  // Use the request.url to determine in node what url was entered into the browser.
  if (DEBUG) console.log(request.url);
  // Use a switch statement, with the request.url to determine the action to take based on the route requested.
  switch (request.url) {
    case "/":
    case "/index":
      path += "index.html";
      response.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      response.statusCode = 200;
      break;
    case "/contact":
      path += "contact.html";
      response.statusCode = 200;
      break;
    case "/products":
      path += "products.html";
      response.statusCode = 200;
      break;
    case "/subscribe":
      path += "subscribe.html";
      response.statusCode = 200;
      break;
    default:
      path += "404.html";
      response.statusCode = 404;
      break;
  }
  if (DEBUG) console.log(path);
  routes.displayFile(path, response);
  statusCode = response.statusCode;
  if (DEBUG) console.log("statusCode:", statusCode);
  MyEmitter.emit(statusCode);
});

MyEmitter.on(404, () => {
  console.log("<EVENT> statusCode:", statusCode, "page not found");
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
