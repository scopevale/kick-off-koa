// kick-off-koa - exercise 5 - Content Headers
"use strict";

var koa = require('koa');

var app = koa();

app.use(function*(next) {
  if (!this.request.is('application/json')) {
    return yield next;
  }
  this.response.type = 'application/json';
  this.body = { 'message': 'hi!' };
});

app.use(function* (next) {
  this.response.type = 'text';
  this.body = 'ok';
});

app.listen(process.argv[2]);

// // official solution
// var koa = require('koa');
// var parse = require('co-body');
//
// var app = koa();
//
// app.use(function* (next) {
//   // only accept POST request
//   if (this.method !== 'POST') return yield next;
//
//   // max body size limit to `1kb`
//   var body = yield parse(this, { limit: '1kb' });
//
//   // if body.name not exist, respond `400`
//   if (!body.name) this.throw(400, '.name required');
//
//   this.body = body.name.toUpperCase();
// });
//
// app.listen(process.argv[2]);
