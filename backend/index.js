const express = require("express");
const app = express();
const path = require("path");
const hbs=require("hbs");

const templatePath=path.join(__dirname,'../src')

app.use(express.json());
app.set("view engine", "hbs");
app.set("views",templatePath);

app.get("/", (req,res) => {
    res.render("login");
})
app.get("/", (req,res) => {
    res.render("signup");
})
app.listen(4000, () => {
  console.log("port connected\n");
});
