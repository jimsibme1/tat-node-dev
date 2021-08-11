const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

const route = require('./router');

// set middlewware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// set static public folder
app.use(express.static(path.join(__dirname, 'public')));
// http logger
//app.use(morgan('combined'));

// tempalte engine
app.engine('.hbs', exphbs({ extname: '.hbs' }));
            app.set("view engine", 'hbs');
// set folder views
app.set('views', path.join(__dirname, 'resources/views'));

// route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
