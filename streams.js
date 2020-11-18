
//reading large file of data

const fs = require('fs');
const { fileURLToPath } = require('url');


const server= require ('http').createServer();

server.on('request', (req, res) => {

// solution-1

//fs.readFile('test-file.txt',(err, data) =>{

//if (err) console.log(err);
//res.end(data);
//});

/* solution -2: Streams
 create readable stream rather than store in to variable

const readable= fs.createReadStream('test-file.txt')
readable.on('data', chunk => {
  
res.write(chunk); //writing chunk by chunk 

})

readable.on ('end', () => {
 res.end();  // no more data is to this writeable stream
});

readable.on("error", err => {
   console.log(err);
   res.statusCode = 500;
    res.end("File Not Found");
});
*/

//solution-3, overcome and fixed the backpresure problem

const readable= fs.createReadStream('test-file.txt');
readable.pipe(res);
//readbleSource.pipe(WritableDestination)

});

server.listen(8000, "127.0.0.1", () => {

console.log("Listening....");

});



