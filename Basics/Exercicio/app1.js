const http = require('http')

const routes = require("./routeFile1.js")

const server = http.createServer(routes.handler)

server.listen(3000)
