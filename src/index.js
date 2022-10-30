// http://localhost:3000/


const path = require('path');
const express = require('express');
const app = express();

const morgan = require('morgan');

const exphbs = require("express-handlebars");
const { engine } = require("express-handlebars");

const route = require('./routes/index');

// Set localtion to start every url
app.use(express.static(path.join(__dirname, 'public')));

// Middleware handle data from form 
app.use(express.urlencoded({extended: true}));
// Middleware handle data from .js 
app.use(express.json());


// HTTP logger
// app.use(morgan("combined"));

// handlebars, set address for views
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));


// Routes init
route(app);


app.listen(3000);
