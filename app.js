const express = require("express");
//const morgan = require("morgan");
const mongoose = require("mongoose");

//express app
const app = express();

//connect to mongodb
const dbURI = mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register viiew engine

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  //res.sendFile("./views/index.html", { root: __dirname });
  res.render("index", { title: "Home", blogs: blogs });
});

app.get("/about", (req, res) => {
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

//404-page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
