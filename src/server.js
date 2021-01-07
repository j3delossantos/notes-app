const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');
//Initializations
const app = express();

//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expHbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}));
app.set('view engine', '.hbs');



//Middlewares
app.use(express.urlencoded({extended: false}));
//GlovalVariables

//Routes
app.use(require('./routes/index.routes'));


//StaticFiles

app.use(express.static(path.join(__dirname, 'public')));
module.exports= app; 