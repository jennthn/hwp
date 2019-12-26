const express     = require("express"),
      app         = express(),
      bodyParser  = require("body-parser"),
      ejsLint     = require('ejs-lint');

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/pizza", (req, res) => {
    res.render("pizza");
});

app.get("/donairs", (req, res) => {
    res.render("donair");
});

app.get("/deals", (req, res) => {
    res.render("deals");
});

app.get("/sides", (req, res) => {
    res.render("sides");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.listen(3000, () => {
    console.log("Server started!");
});