const express = require("express");
const app = express();

app.use((req, res, next) => {
  const ip =
    req.headers["cf-connecting-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.socket.remoteAddress;

  console.log("IP:", ip);
  console.log("User-Agent:", req.headers["user-agent"]);
  console.log("Time:", new Date().toISOString());
  console.log("-------------");
  next();
});

app.get("/", (req, res) => {
  res.send("Bot logger online");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
