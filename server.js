const http = require('http');
const path = require('path');
const fs = require('fs');

import {
    RouteResolver
} from './route';

const server = http.createServer((req, res) => {
    const routeResolver = new RouteResolver();
    routeResolver.getPage(req.url);
    routeResolver.on('resolveRoute', (data) => {
        res.writeHead(data.statusCode, {
            'Content-type': data.contentType
        });
        res.end(data.page, 'utf8');
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));