// kick-off-koa - exercise 1 - Hello Koa
"use strict";

var koa = require('koa');
var app = koa();

// handlers here
app.use(function*() {
  this.body = 'hello koa';
});

var port = process.argv[2];
app.listen(port);


// // official solution
// var koa = require('koa');
//
// var app = koa();
//
// app.use(function*() {
//   this.body = 'hello koa';
// });
//
// app.listen(process.argv[2]);
