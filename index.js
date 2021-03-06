const express = require("express")
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const port = 3000;
const routes = require('./routers');

//mongodb+srv://vu:abcd12345@cluster0.6qjzk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// Connect database
mongoose.connect('mongodb://localhost/mongoose', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

// Use cookieParser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Use view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

// Use routes
app.use('/', routes);

// Setup port start
app.listen(process.env.port, () => {
   
})
