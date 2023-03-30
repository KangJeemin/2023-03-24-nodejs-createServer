import http from 'http'

const server = http.createServer((req,res)=>{
  // console.dir(res)
  console.dir(req)
});

server.listen(3000);