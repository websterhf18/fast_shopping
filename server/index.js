const restify = require('restify')
const fs = require('fs')
const indexHTML = fs.readFileSync('./dist/index.html').toString();
const corsMiddleware = require('restify-cors-middleware')
const cors = corsMiddleware({  
  origins: ["*"],
  allowHeaders: ["Authorization"],
  exposeHeaders: ["Authorization"]
});
const { port, forceSwagger } = require('./config');
const server = restify.createServer({
  name: 'FastShopping',
  ignoreTrailingSlash: true
})
server.pre(cors.preflight);  
server.use(cors.actual);
server.use(restify.plugins.bodyParser({
  mapParams: true,
  mapFiles: false,
  overrideParams: false
}));
/**
 * Server Routes
 */
require('./router/categoriesRouter')(server)
require('./router/customerRouter')(server)
require('./router/ordersRouter')(server)
require('./router/productsRouter')(server)
/**
 * Client URL
 */
server.get('/*', restify.plugins.serveStatic({
  directory: './dist',
  default: 'index.html'
}))
// Hacky solution to fix client-side routing
server.on('restifyError', (req, res, err, cb) => {
  if (err.jse_cause && err.jse_cause.code === 'ENOENT') {
    res.sendRaw(indexHTML)
  } else {
    return cb()
  }
})
/**
 * Api Docs
 */
var restifySwaggerJsdoc = require('restify-swagger-jsdoc');
restifySwaggerJsdoc.createSwaggerPage({
    title: 'API documentation',
    version: '1.0.0',
    server: server,
    path: '/api-docs',
    forceSecure: forceSwagger,
    apis: [ `${__dirname}/router/*.js` ], 
});
server.listen(port);