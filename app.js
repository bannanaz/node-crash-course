const express = require("express");

//express app
const app = express();

//register viiew engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  //res.sendFile("./views/index.html", { root: __dirname });
  res.render("index");
});

app.get("/about", (req, res) => {
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

//404-page
app.use((req, res) => {
  res.status(404).render("404");
});
