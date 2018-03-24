var bodyParser = require('body-parser');
const express = require('express');
const path = require('path');


const authRouter = require('./routes/auth');
const app = express();

var config = require('./config/config.json');
require('./models/main.js').connect(config.mongoDbUri);

//const auth = require('./models/user.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'jade'));
app.set('view engine', 'jade');



app.use('/auth', authRouter);


app.listen(3001, () =>{
	console.log('Server start listening on port 3001');
})

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.send('404 Not Found');
});

module.exports = app;