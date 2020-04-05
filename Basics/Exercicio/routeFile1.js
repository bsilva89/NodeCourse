const fs = require('fs')

const requestHandler = (req,res) => {
    if (req.url === '/') {
        res.write('<html>')
        res.write('<head><title>Pagina Inicial</title></head>')
        res.write('<body><h1>Pagina Inicial, bem-vindo!</h1></body>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="Enter user here"> \
        <button type ="submit">Registrar</button></form></body>');
        res.write('</html>')
        return res.end()
    }
    if (req.url === '/users') {
        res.write('<html>')
        res.write('<head><title>Pagina Usuarios</title></head>')
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li> \
            </ul></body>');
        res.write('</html>')
        return res.end()
    }
    if (req.url === '/create-user') {
        const body = []
        req.on('data', (chunck) => {
        body.push(chunck)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message1 = parsedBody.split('=')[1]
            console.log(message1)
            fs.appendFile('user.txt', message1 + '\r\n',  (err) => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }
}

// module.exports = requestHandler

// module.exports = {
//     handler: requestHandler,
//     variavel: 'qualquer coisa'
// }

exports.handler = requestHandler // = module.exports.handler = requestHandler