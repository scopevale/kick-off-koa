// kick-off-koa - exercise 9 - Session
"use strict";


const koa = require('koa');
const session = require('koa-session');

const app = koa();
app.keys = ['secret', 'keys'];

app.use(session(app));

app.use(function*(next) {
  if (this.path !== '/') {
    return yield next;
  }
  let views = this.session.views || 0;
  this.body = (++views) + ' views';
  this.session.views = views;
});

app.listen(process.argv[2]);
