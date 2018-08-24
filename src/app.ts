import express from 'express';
import http from 'http';
import path from 'path';

var indexRouter = require('../routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', indexRouter);

var server: http.Server = http.createServer(app);

server.listen(3000, () => {
    console.log('Express server is running on port ' + 3000);
});