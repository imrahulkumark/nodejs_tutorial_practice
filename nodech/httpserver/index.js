//The http.createserver() method include request and responce parameter whitch is suppied.

//The requesr object can be use to get information about the current http request.
// e/g., url, requesr holder, and data.

//The respone object can be used to send a message to a current http request.

//If the respoce from the http server is supposed to be displayed as HTML,
//you should include an HTML header with the corect content type:




const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/") {
        res.end('hello from the home page');
    } else if(req.url == "/about") {
        res.end('hello from the about page');
    }else if(req.url == "/contact") {
        res.end('hello from the contact page');
    }else if(req.url == "/userapi") {
     
        fs.readFile(`${__dirname}/userapi/userapi.json`, 
        "utf-8",
         (err, data) =>{
            // console.log(data);
            const objData = JSON.parse(data);
            res.end(objData[3].firstName);

        });
        
            // res.end('hello from the user api page');    
    }else{
        res.writeHead(404, {"conent-type":"text/html"});
        res.end("<h1>404 error page. page dose not exides</h1>")
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000")
});