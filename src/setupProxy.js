const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://38.242.132.213:8081',
      changeOrigin: true,
    })
  );
};