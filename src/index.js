
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');

const app = express();
const port = 3000;
// set static public folder
app.use(express.static(path.join(__dirname, 'public')));
// http logger
app.use(morgan('combined'));

// tempalte engine
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
// set folder views
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
