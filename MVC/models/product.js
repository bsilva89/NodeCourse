const fs = require('fs')
const path = require('path')
const rootPath = require('../util/path.js')

const p = path.join(rootPath, 'data', 'products.json')

const getProductsFromFile = cb => {
        fs.readFile(p, (err, fileContent) => {
            if (err) {
               return cb([])
            }
            cb(JSON.parse(fileContent))
        })
}

module.exports = class Product {
    constructor(title) {
        this.title = title
    }

    save() {
        getProductsFromFile(products => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err)
            })
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb)
    }
} 
