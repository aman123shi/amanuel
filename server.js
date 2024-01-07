const express = require("express");

const app = express();
// app.use(express.static("./dist"));

app.get("/*", (req, res) => {
  res.send("<h2>under maintenance i will be back soon</h2>");
});

// app.get("/root*", (req, res) => {
//   res.sendFile("index.html", { root: "dist/" });
// });

app.listen(process.env.PORT || 8080);
