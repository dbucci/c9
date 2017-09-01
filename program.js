var mymodule = require('./listfiles')

mymodule(process.argv[2], process.argv[3], callback)

function callback(err, list) {
    if (err) { console.log(err) }
    list.forEach(function(e) { console.log(e) })
}