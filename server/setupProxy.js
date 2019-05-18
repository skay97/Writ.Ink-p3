// const proxy = require("http-proxy-middleware");
// module.exports = function(app) {
//   app.use(proxy("/api/*", { // https://github.com/chimurai/http-proxy-middleware
//     target: "http://localhost:3090",
//     secure: false
//   }));
// };

// var express = require('express');
// var proxy = require('http-proxy-middleware');

// var app = express();

// app.use(
//   '/api',
//   proxy({ target: 'http://www.example.org', changeOrigin: true })
// );
// app.listen(3000);

// // http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar


/////////////////////////////In clients package,json try///////////////////
// "proxy": {
//     "/api": {
//         "target": "http://localhost:3090"
//     }