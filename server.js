const http = require("http");
const routes = require("./routes.js");

const server = http.createServer((request, response) => {
  let path = "./views/";
  console.log(request.url);
  switch (request.url) {
    case "/":
    case "/index":
      path += "index.html";
      console.log(path);
      response.statusCode = 200;
      routes.indexPage(path, response);
      break;
    case "/about":
      path += "about.html";
      console.log(path);
      response.statusCode = 200;
      routes.aboutPage(path, response);
      break;
    case "/contact":
      path += "contact.html";
      console.log(path);
      response.statusCode = 200;
      routes.contactPage(path, response);
      break;
    case "/products":
      path += "products.html";
      console.log(path);
      response.statusCode = 200;
      routes.aboutPage(path, response);
      break;
    case "/subscribe":
      path += "subscribe.html";
      console.log(path);
      response.statusCode = 200;
      routes.aboutPage(path, response);
      break;
    default:
      path += "404.html";
      response.statusCode = 404;
      routes.fourofourPage(path, response);
      break;
  }
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
