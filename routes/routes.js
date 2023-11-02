import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filePath = (dirName, directory, file) => {
  return path.join(dirName, directory, file);
};

export const routes = {
  GET: {
    "/": (req, res) => {
      fs.readFile(
        filePath(__dirname, "../public", "index.html"),
        (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal server error");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          }
        }
      );
    },
    "/style.css": (req, res) => {
      fs.readFile(
        filePath(__dirname, "../public", "style.css"),
        (err, data) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal server error");
          } else {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
          }
        }
      );
    },
  },
};
