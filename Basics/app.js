const http = require('http')

const routes = require("./routeFile")

const server = http.createServer(routes.handler)

server.listen(3000)
