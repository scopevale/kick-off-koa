// kick-off-koa - exercise 11 - Authentication
"use strict";

var koa = require('koa');
var parse = require('co-body');
var session = require('koa-session');

var form = '<form action="/login" method="POST">\
  <input name="username" type="text" value="username">\
  <input name="password" type="password" placeholder="The password is \'password\'">\
  <button type="submit">Submit</button>\
</form>';

var app = koa();

// use koa-session somewhere at the top of the app
// we need to set the `.keys` for signed cookies and the cookie-session module
app.keys = ['secret1', 'secret2', 'secret3'];
app.use(session(app));

/**
 * If `this.session.authenticated` exist, user will see 'hello world'
 * otherwise, people will get a `401` error  because they aren't logged in
 */

app.use(function* home(next) {
  if (this.request.path !== '/') return yield next;
  if (this.session.authenticated) {
    this.body = 'hello world';
  }
  this.status = 401;
});

/**
 * If successful, the logged in user should be redirected to `/`.
 * hint: use `this.redirect`
 */

app.use(function* login(next) {
  if (this.request.path !== '/login') return yield next;
  if (this.request.method === 'GET') return this.body = form;
  this.redirect('/');
});

/**
 * Let's redirect to `/login` after every response.
 * If a user hits `/logout` when they're already logged out,
 * let's not consider that an error and rather a "success".
 */

app.use(function* logout(next) {
  if (this.request.path !== '/logout') return yield next;


});



app.listen(process.argv[2]);
