// kick-off-koa - exercise 10 - Templating
"use strict";

const koa = require('koa');
const views = require('co-views');

const app = koa();

var render = views(__dirname + '/views', {
  ext: 'ejs'
});

const user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

app.use(function*() {
  this.body = yield render('user', {user: user});
});

app.listen(process.argv[2]);
