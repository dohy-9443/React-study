const Router = require('koa-router');
const api = new Router();

api.get('/test', (ctx) => {
  ctx.body = `<h1>text 성공</h1>`;
});

// 라우터를 내보냄
module.exports = api;
