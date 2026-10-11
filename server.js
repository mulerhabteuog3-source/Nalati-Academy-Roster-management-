const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ name: "Nalati Academy Roster", status: "running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Nalati Academy Roster listening on port ${port}`);
});
