// kick-off-koa - exercise 7 - Error Handling
"use strict";

var koa = require('koa');

var app = koa();

app.use(errorHandler());

app.use(function* () {
  if (this.path === '/error') throw new Error('ooops');
  this.body = 'OK';
});

function errorHandler() {
  return function* (next) {
    // try catch all downstream errors here
    try {
      yield next;
    } catch (err) {
      this.body = 'internal server error';
      this.status = 500;
      //console.log(error.message);
    }
  };
}

app.listen(process.argv[2]);
