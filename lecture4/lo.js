const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>WE can do it</title></head>');
    res.write('<body><h1>lets go enter your Details:</h1>');
    res.write('<form action="/submit details" method="POST">');
    res.write('<input type="text" name="username" placeholder="enter your name" /><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="Male"/>');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="Female"/><br><br>');
    res.write('<br><input type="submit" value="Submit"/>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.url.toLowerCase() === '/submit details' && req.method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const userDetails = parsedBody.split('&').map(param => param.split('=')[1]).join(', ');
      fs.writeFileSync('user.txt', userDetails);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  } else {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>WE can</title></head>');
    res.write('<body><h1>lets fukimg go</h1></body>');
    res.write('</html>');
    res.end();
  }
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server is running on address http://localhost:${port}`);
});