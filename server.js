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
  // Use a switch, or other programming logic statement, with the request.url to determine the action to take based on the route requested.
  switch (request.url) {
    case "/":
    case "/index":
      path += "index.html";
      // Add a console.log() for each different case within the switch statement.
      if (DEBUG) console.log(path);
      response.statusCode = 200;
      routes.indexPage(path, response);
      break;
    case "/about":
      path += "about.html";
      if (DEBUG) console.log(path);
      response.statusCode = 200;
      routes.aboutPage(path, response);
      break;
    case "/contact":
      path += "contact.html";
      if (DEBUG) console.log(path);
      response.statusCode = 200;
      routes.contactPage(path, response);
      break;
    case "/products":
      path += "products.html";
      if (DEBUG) console.log(path);
      response.statusCode = 200;
      routes.aboutPage(path, response);
      break;
    case "/subscribe":
      path += "subscribe.html";
      if (DEBUG) console.log(path);
      response.statusCode = 200;
      routes.aboutPage(path, response);
      break;
    default:
      path += "404.html";
      response.statusCode = 404;
      routes.fourofourPage(path, response);
      break;
  }
  statusCode = response.statusCode;
  MyEmitter.emit(statusCode);
});

MyEmitter.on(404, () => {
  console.log("<EVENT> statusCode:", statusCode, "page not found");
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
