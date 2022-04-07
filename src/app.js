const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
// agar left wale se nai chala toh right wale pr aajayega
const port = process.env.PORT || 8000;

const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
// public static path
const static_path = (path.join(__dirname, "../public"));

app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path)

app.use(express.static(static_path));

//Routing
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/weather", (req, res) => {
    res.render("weather");
});
app.get("*", (req, res) => {
    res.render("404error", {
        errormsg: "Opps! Page not found",
    });
});

app.listen(port, () => {
    console.log(`Listening to ${port}`);
});