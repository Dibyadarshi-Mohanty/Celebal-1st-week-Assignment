import http, { createServer } from 'http';
import fs from 'fs';
const port = 3000;

const server = createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('hello.html',function (err, data) {
if(err){
    res.writeHead(404);
    res.write('File not found');
}
else{
    res.write(data);
}
res.end();
});
    

});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});