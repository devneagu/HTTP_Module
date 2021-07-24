var http = require('http');
const port = 4000
//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/html'})
    if(req.method === 'GET'){
        //do something here logic.
    }
    if(req.method === 'POST'){
        //do something here with the data received
    }
    res.write('Hello World!');
    res.end(); //end the response
})
.listen(port); //the server object listens on port 3000
