const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  console.log(method);
  console.log(url);

  if (url === "/cats") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ message: "You called the cats route" }));
  }
  if (url === "/dogs") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ message: "You called the dogs route" }));
  }
  if (url === "/error" && method === "GET") {
    res.statusCode = 404;
    return res.end(JSON.stringify({ message: "This page does not exist." }));
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
