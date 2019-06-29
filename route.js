const EventEmitter = require('events');
const path = require('path');
const fs = require('fs');

export const routes = ['/', 'home', 'about'];

export class RouteResolver extends EventEmitter {
    // ONLY WORKS WITH PATH WITH ONE SLASH (/)
    // Checks if path name is part of the registereed route, emits the appropriate page
    getPage(pathName) {
        console.log(pathName);
        if (pathName.indexOf('css') > -1) {
            fs.readFile(path.join(__dirname, '/public', pathName), (err, data) => {
                if (err) throw err;
                this.emit('resolveRoute', {
                    page: data,
                    statusCode: 200,
                    contentType: 'text/css'
                });
            });
        } else {
            pathName = pathName === '/' ? '/home' : pathName;
            routes.find((route) => pathName === '/' + route) ?
            fs.readFile(path.join(__dirname, '/public', `${pathName}.html`), (err, data) => {
                if (err) throw err; // TODO: handle this error better
                this.emit('resolveRoute', {
                    page: data,
                    statusCode: 200,
                    contentType: 'text/html'
                });
            }) :
            fs.readFile(path.join(__dirname, '/public', '404.html'), (err, data) => {
                if (err) throw err;
                this.emit('resolveRoute', {
                    page: data,
                    statusCode: 200,
                    contentType: 'text/html'
                });
            });            
        }
    }
}