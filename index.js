import http from "http";
import { routes } from "./routes/routes.js";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (routes[method]) {
    if (routes[method][url]) {
      routes[method][url](req, res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain " });
    res.end("Method not allowed");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
