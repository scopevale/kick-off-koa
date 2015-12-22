// kick-off-koa - exercise 8 - Cookies
"use strict";

const koa = require('koa');
const app = koa();
app.keys = ['secret', 'keys'];

app.use(function*(next) {
  if (this.path !== '/') {
    return yield next;
  }
  let options = { signed: true };
  let views = this.cookies.get('view', options) || 0;
  this.body = (++views) + ' views';
  this.cookies.set('view', views, options);
});

app.listen(process.argv[2]);
