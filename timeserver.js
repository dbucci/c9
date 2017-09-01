var net = require('net')
var server = net.createServer(function(socket) {
    var date = new Date()
    var time = date.getFullYear() + '-' + padded(date.getMonth() + 1) + '-' + padded(date.getDate()) + ' ' + padded(date.getHours()) + ':' + padded(date.getMinutes()) + '\n'
    socket.end(String(time))
}).listen(process.argv[2])

function padded(date) {
    return ("0".repeat(2) + date).slice(-2)
}