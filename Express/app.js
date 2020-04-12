const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const rootDir = require('./util/helper')
const adminData = require('./Routes/admin')
const shopRoutes = require('./Routes/shop')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(rootDir, 'public')))
// sapp.use((req, res, next) => {
//     console.log("middleware1")
//     next()
// })

// app.use((req, res, next) => {
//     console.log("middleware2")
//     res.send('<h1>Hello from middleware2</h1>')
// })

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use('/', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)
