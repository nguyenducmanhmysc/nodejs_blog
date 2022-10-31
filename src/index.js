// http://localhost:3000/

const path = require('path');
const express = require('express');
const app = express();

const morgan = require('morgan');

const exphbs = require('express-handlebars');
const { engine } = require('express-handlebars');

const route = require('./routes/index');

// reset localtion to start every with url
app.use(express.static(path.join(__dirname, 'public')));

// Middleware handle data from form
app.use(express.urlencoded({ extended: true }));
// Middleware handle data from .js
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// reset filename extension from .handlebars (defaults) to .hbs
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
    }),
);

// reset address for "views"
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// connect to database
const DB = require('./config/db/index');
DB.connect();

// Routes init
route(app);

app.listen(3000);
