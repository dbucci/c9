var http = require('http')
var data = {}
var done = {}
var args = [process.argv[2], process.argv[3], process.argv[4]]

args.forEach(function(url) { getHttp(url) })

function getHttp(url) {
    http.get(url, function(response) {
        response.setEncoding('utf8')
        response.on('data', function(d) {
            data[url] = (data[url] || '') + d
        })
        response.on('end', function(e) {
            done[url] = true
            cb()
        })
    })
}

function cb() {
    if (args.every(function(url) { return done[url] })) {
        args.forEach(function(e) { console.log(data[e]) })
    }
}