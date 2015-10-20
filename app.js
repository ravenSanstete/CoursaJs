var connect=require('connect');
var connect_route=require('connect-route');
var custom_router=require('./router');
var body_parser=require('body-parser');
var logger=require('morgan');
var session=require('express-session');


var app=connect();

app.use(logger('dev')).use(session({secret:"hello"})).use(body_parser.json('32kb')).use(connect_route(custom_router)).listen(4000);