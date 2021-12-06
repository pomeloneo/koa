const Koa = require('./lib/application');
const app = new Koa();
debugger
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);