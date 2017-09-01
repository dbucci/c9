var port = process.argv[2]
var post = process.argv[3]
var fs = require('fs')
var map = require('through2-map')
require('http').createServer(function(req, res) {
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)
}).listen(port)