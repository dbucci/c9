
module.exports = function(myDir, myExt, callback) {
    var fs = require('fs')
    var path = require('path')
    var dir = myDir
    var extToFilter = "." + myExt
    var all = []
    
    fs.readdir(dir, function(err, list) {
        if (err) {return callback(err)}
        for (var i = 0; i < list.length; i++) {
            var ext = path.extname(list[i])
        	if (ext == extToFilter) {
        	    all.push(list[i])
        	}
        }
        callback(null, all)
    })
}