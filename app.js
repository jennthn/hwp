const express        = require("express"),
      app            = express(),
      bodyParser     = require("body-parser"),
      ejsLint        = require("ejs-lint"),
      sass           = require("node-sass"),
      sassMiddleware = require('node-sass-middleware'),
      path           = require('path'); 
    
// app.set("view engine", "ejs");
// app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// notice that the following line has been removed
// app.use(express.static(__dirname + '/public'));

// adding the sass middleware
app.use(sassMiddleware({
  src: path.join(__dirname, '/sass'),
  dest: path.join(__dirname, 'public/css'),
  debug: true,
  indentedSyntax: false,
  outputStyle: 'compressed',
  prefix: '/css'
}));
  

// The static middleware must come after the sass middleware
app.use(express.static( path.join( __dirname, 'public' ) ) );


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