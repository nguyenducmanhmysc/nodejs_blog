// http://localhost:3000/


const path = require('path');
const express = require('express');
const app = express();

const morgan = require('morgan');

const exphbs = require("express-handlebars");
const { engine } = require("express-handlebars");

// Set localtion to start every url
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan("combined"));

// handlebars, set address for views
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));


// app
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/news", (req, res) => {
    res.render("news");
});

app.listen(3000);
