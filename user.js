const createServer = require('http').createServer;
const fs = require('fs');

const server = createServer((req, res) => {
  console.log(req.url, req.method,request.headers);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>WE can do it</title></head>');
    res.write('<body><h1>lets go enter your Details:</h1>');
    res.write('<form action="/submit details" method="POST">');
    res.write('<input type="text" name="username" placeholder="enter your name" /><br>');
    res.write('<label for = "male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for = "female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/>');
    res.write('<br><br>');
    res.write('<input type="submit" value="Submit"/>');
    res.write('</form>');
    res.write('</body>'); 
    res.write('</html>');
    return res.end();
  } else if (req.url.toLowerCase() === '/submit details' && req.method === 'POST') {
    fs.writeFileSync('user.txt', 'vikram kumar');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>WE can</title></head>');
    res.write('<body><h1>lets go</h1></body>');
    res.write('</html>');
    res.end();
  }
    });
      server.listen(3000);
      server.on('listening', () => {  
        console.log('Server is running on port 3000');
      });
