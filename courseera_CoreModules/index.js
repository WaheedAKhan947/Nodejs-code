let http = require('http');
http.createServer(function (req, res) {
    res.write('hello from server ');//write a response to the client
    res.write("Greeting form courseera");
    res.end();//end of response from server
}).listen(4500);//the server instance listens for http requests on port 6000


// sample code to read a file synchronously using the fs.readFile() method
const fs = require('fs');
const data = fs.readFile('sample.txt', 'utf8');
// print contents of the file "sample.txt" to console
console.log(data);


let os = require('os');
console.log("Computer OS Platform Info : " + os.platform());
console.log("Computer OS Architecture Info: " + os.arch());


let util = require('util');
let str = 'The loop has executed %d time(s).';
for (let i = 1; i <= 10; i++) {
    console.log(util.format(str, i)); //outputs 'The loop has executed i time(s)'
}


const url = require('url');
let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark';
let qry = url.parse(webAddress, true);
let qrydata = qry.query; //returns an object: {lastName: 'Kent', firstName: 'Clark'}
console.log(qrydata.firstName); //outputs Clark


let qry = require('querystring');
let qryParams = qry.parse('lastName=Kent&firstName=Clark'); 
console.log(qryParams.firstName); //returns Clark