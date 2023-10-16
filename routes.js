const fs = require("fs");

function displayPage(path, response) {
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
  displayFile,
  // export other pages
};
