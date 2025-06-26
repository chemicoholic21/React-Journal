import "dotenv/config";
import http from "http";
import connectDB from "./db/connect.js";
import app from "./app.js";

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
