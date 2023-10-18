const fs = require("fs");

// define/extend an EventEmitter class
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
// initialize an new emitter object
const myEmitter = new MyEmitter();

myEmitter.on("route", (statusCode, info) => {
  console.log("<EVENT> Response code: " + statusCode + ",", info);
});

function indexPage(path, response) {
  displayFile(path, response);
}
function aboutPage(path, response) {
  myEmitter.emit("route", response.statusCode, "About page accessed");
  displayFile(path, response);
}
function contactPage(path, response) {
  displayFile(path, response);
}
function productsPage(path, response) {
  displayFile(path, response);
}
function subscribePage(path, response) {
  displayFile(path, response);
}

function fourofourPage(path, response) {
  myEmitter.emit("route", "404", "Page not found");
  displayFile(path, response);
}

function displayFile(path, response) {
  fs.readFile(path, function (err, data) {
    if (err) {
      console.log.apply(err);
      response.end();
    } else {
      console.log(`${path} file was served`);
      response.writeHead(response.statusCode, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  });
}

module.exports = {
  indexPage,
  aboutPage,
  contactPage,
  productsPage,
  subscribePage,
  fourofourPage,
};
