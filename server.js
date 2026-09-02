console.log("Web serverni boshlash !");
const { clear } = require("console");
const express = require("express");
const app = express();
const http = require("http");

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

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
});
