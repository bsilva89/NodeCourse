const fs = require('fs')


const requestHandler = (req,res) => {
if (req.url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="Enter message here"> \
        <button type ="submit">Send</button></form></body>');
    res.write('</html>')
    return res.end()
}
if (req.url === '/message' && req.method === "POST") {
    const body = []
    req.on('data', (chunck) => {
        console.log(chunck)
        body.push(chunck)
    })
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString()
        const message1 = parsedBody.split('=')[1]
        fs.writeFile('message.txt', message1,  (err) => {
            res.statusCode = 302
            res.setHeader('Location', '/')
            return res.end()
        })
        
    })
}
res.setHeader('Content_type', 'text/html', )
res.write('<html>')
res.write('<head><title>Default</title></head>')
res.write('<body><h1>Body padrao</h1></body>');
res.write('</html>')
res.end()
}

// module.exports = requestHandler

// module.exports = {
//     handler: requestHandler,
//     variavel: 'qualquer coisa'
// }

exports.handler = requestHandler // = module.exports.handler = requestHandler