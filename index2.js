const http = require('http')

function test(req, resp) {
    resp.write("Hello Vicky , How are you ?");
    resp.end()
}

http.createServer(test).listen(4500);