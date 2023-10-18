const http = require("http");
const routes = require("./routes.js");

const DEBUG = true;

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
      routes.indexPage(path, response);
      break;
    case "/about":
      path += "about.html";
      response.statusCode = 200;
      routes.aboutPage(path, response);
      break;
    case "/contact":
      path += "contact.html";
      response.statusCode = 200;
      routes.contactPage(path, response);
      break;
    case "/products":
      path += "products.html";
      response.statusCode = 200;
      routes.productsPage(path, response);
      break;
    case "/subscribe":
      path += "subscribe.html";
      response.statusCode = 200;
      routes.subscribePage(path, response);
      break;
    default:
      path += "404.html";
      response.statusCode = 404;
      routes.fourofourPage(path, response);
      break;
  }
  if (DEBUG) console.log(path);
  if (DEBUG) console.log("STATUS CODE", response.statusCode);
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
