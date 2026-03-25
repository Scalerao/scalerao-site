const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;

  if (queryObject.code) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h2>Authorization Successful</h2><p>Code: ${queryObject.code}</p>`);
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>No authorization code received</h2>");
  }
});

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
