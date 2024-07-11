// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    if (request.url === '/styles.css') {
        fs.readFile(path.join(__dirname, 'styles.css'), (err, data) => {
            if (err) {
                response.writeHead(500);
                response.end('Error loading CSS file');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/css' });
                response.end(data);
            }
        });
    } else if (request.url === '/page2.html') {
        fs.readFile(path.join(__dirname, 'page2.html'), (err, data) => {
            if (err) {
                response.writeHead(500);
                response.end('Error loading HTML file');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
            }
        });
    } else {
        fs.readFile(path.join(__dirname, 'Homepage.html'), (err, data) => {
            if (err) {
                response.writeHead(500);
                response.end('Error loading HTML file');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(data);
            }
        });
    }
});


server.listen(9000, () => {
    console.log('Server is listening on port 9000');
});
