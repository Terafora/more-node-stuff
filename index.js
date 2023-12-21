const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/friends') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            id: 1,
            name: 'John Doe',    
        }));
    } else if (req.url === '/messages') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello there!</li>');
        res.write('<li>General Kenobi!</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        res.end('<h1>Page not found!</h1>');
    
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});