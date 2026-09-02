console.log("Web serverni boshlash !");
const { clear } = require("console");
const express = require("express");
const app = express();


//MongoDB choqirish
const db = require("./server").db();

//1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//2. Sessions:

//3. Views code.  BSSR(backendda frontend yasash)
app.set("views", "views");
app.set("view engine", "ejs");

//4. Routing code
// app.get("/hello", function(req, res) {
//     res.end(`<h1 style="background: green">Hello world by Mike</h1>`);
// }) ;

// app.get("/gift", function(req, res) {
//     res.end(`<h1 style="background: grey">You are at gifts page !</h1>`);
// }) ;
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});
app.get(`/`, function (req, res) {
  res.render("reja");
});


module.exports = app;