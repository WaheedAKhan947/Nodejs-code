const http = require("http");

//  http.createServer().listen(4500);   // Function chaining in JavaScript
http.createServer((req, resp)=>{
    resp.write("<h1>Hello world , This is the first server by Dev.Waheed on 02/11/2023 <h1")
    resp.end();
}).listen(4500);