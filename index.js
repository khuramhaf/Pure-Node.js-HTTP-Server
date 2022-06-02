const fs = require('fs');

var http = require('http');
var path = require('path');



http.createServer(function (req, res) {
	
var requrl = req.url;


if (req.method == "GET"){
if (req.url == '/'){
let rawdata = fs.readFileSync('index.html');
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(rawdata);
res.end();
}
else {
var x = req.url;
let y = 0;
if (x.charAt(0)=="/"){
y = x.replace("/", "");
}
else {
y = x;
}
var z = path.extname(y);
let rawdata = fs.readFileSync(y);
if (z==".css"){
res.writeHead(200, {'Content-Type': 'text/css'});
}
else if (z==".jpg"){
res.writeHead(200, {'Content-Type': 'image/jpeg'});
}
else {
res.writeHead(200, {'Content-Type': 'text/html'});
}
res.write(rawdata);
res.end();
}}

if (req.method == "POST"){
	var x = req.url;
	if (x.charAt(0)=="/"){
y = x.replace("/", "");
var reader = fs.createReadStream(y);
var g;
reader.on('data', function (chunk) {
    g = chunk.toString();
	eval(g);
	});
	
}
	


}

}).listen(8000);