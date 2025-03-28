const http = require('http');

const server = http.createServer((req, res)=>{
if(req.url === '/'){res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>WE can do it</title></head>');
  res.write('<body><h1>lets go</h1></body>');
  res.write('</html>');
  return res.end();
  
} else if (req.url === '/product') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>WE can buddy</title></head>');
  res.write('<body><h1>lets </h1></body>');
  res.write('</html>');
  return res.end();
} else {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>WE can</title></head>');
  res.write('<body><h1>lets fukimg go</h1></body>');
  res.write('</html>');
 return res.end();
}
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>WE can</title></head>');
  res.write('<body><h1>lets fukimg go</h1></body>');
  res.write('</html>');
  res.end();
});
  
const port = 3001;
server.listen(port, ()=>{
  console.log(`Server is running on address http://localhist:${port}`);
}); 