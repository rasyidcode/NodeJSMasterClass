const http = require('http')
const url = require('url')

const server = http.createServer(function(req, res) {
    const parsedUrl = url.parse(req.url, true)

    const path = parsedUrl.pathname
    const trimmedPath = path.replace(/^\/+|\/+$/g, '')

    const queryStringObject = parsedUrl.query

    const method = req.method.toLowerCase()

    const headers = req.headers

    res.end("Hello There!")

    console.log(`Requested received on path: ${trimmedPath} with method: ${method} and query string:`, queryStringObject)
    console.log(`Requested receive with headers: ${headers.toString()}`)
})

server.listen(3000, function() {
    console.log("The server is starting on port 3000")
})