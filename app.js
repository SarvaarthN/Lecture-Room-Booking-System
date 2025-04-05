const http = require('http')
const fs = require('fs')
const path = require('path')
const port = 3000

const server = http.createServer(function(req, res) {
    let filePath = req.url === '/' ? 'login.html' : req.url.substring(1) //If req.url is '/', then filePath will be 'login.html' Otherwise, filePath will be the rest of the URL after the /

    const extname = path.extname(filePath)
    let contentType = 'text/html'
    //This switch statement will make the file type that we will call in the login.html
    switch (extname) {
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpeg'
            break
    }
    //First we had only login.html now whatever files get called, node.js will be able to handle
    fs.readFile(filePath, function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write("Error: File Not Found")
        } else {
            res.writeHead(200, { 'Content-Type': contentType })
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})
