// IMPORTING MODULES
// import { Person } from './utils';

// const marvelPerson = new Person('Ironman', 3000);
// console.log(marvelPerson.getIntroduction());

// const dragonBallPerson = new Person('Goku', 9000);
// console.log(dragonBallPerson.getIntroduction());

// MODULES - path
// const path = require('path');

// // Base file name
// console.log(path.basename(__filename));

// // Directory name
// console.log(path.dirname(__filename));

// // Get file extension
// console.log(path.extname(__filename));

// // Create path object
// console.log(path.parse(__filename));

// // Concatenate paths
// console.log(path.join(__dirname, '/test', 'hello.html'));

// MODULES - fs
// const path = require('path');
// const fs = require('fs');

// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw err;

//     console.log('Folder created...');
// });

// create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'meme.txt'), 'Hello there!', (err) => {
//     if (err) throw err;

//     console.log('File created...');

//     // append to file
//     fs.appendFile(path.join(__dirname, '/test', 'meme.txt'), 'General Kenodi!', (err) => {
//         if (err) throw err;

//         console.log('File appended...');
// });
// });

// read from file
// fs.readFile(path.join(__dirname, '/test', 'meme.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('Data from file: ', data);
// });

// rename from file
// fs.rename(
//     path.join(__dirname, '/test', 'meme.txt'),
//     path.join(__dirname, '/test', 'starwars_meme.txt'), (err) => {
//     if (err) throw err;
//     console.log('File renamed');
// });

// MODULES - os
// const os = require('os');

// // get platform
// console.log('Platform: ', os.platform);

// // get architecture
// console.log('Platform: ', os.arch);

// // get cpus
// console.log('Platform: ', os.cpus());

// // get total memory
// console.log('Platform: ', os.totalmem/1024/1024/1024); // in gb

// // get free memory
// console.log('Platform: ', os.freemem/1024/1024/1024); // in gb

// MODULES - url
// const URL = require('url').URL;

// const myURL  = new URL('http://mywebsite.com/hello/html?id=10&status=active');

// // serialize url
// console.log(myURL.href);
// console.log(myURL.toString());
// // host (root domain)
// console.log(myURL.host);
// // hostname (does not get port)
// console.log(myURL.hostname);
// // path name
// console.log(myURL.pathname);
// // serialized query
// console.log(myURL.search);
// // params object
// console.log(myURL.searchParams);
// // add param
// myURL.searchParams.append('year', 2019);
// console.log(myURL.searchParams);
// for(let param of myURL.searchParams) console.log(param);
// myURL.searchParams.forEach((value, name) => console.log(value,'=>',name));


// MODULES - events
// import { NoiseDetector, Logger } from './utils';

// const noiseDetector = new NoiseDetector();

// noiseDetector.on('noise', (data) => {
//     console.log('Noise detected: ', data);
// });

// noiseDetector.makeNoise('Allen Jones');
// console.log('---------------------');
// const logger = new Logger();
// logger.on('logged', (data) => {
//     console.log('Log detected: ', data);
// });
// logger.log('We come in peace!');
// logger.log('Please treat us nicely!');

// MODULES - http
const http = require('http');

// create serve
// http.createServer((req, res) => {
//     // write response
//     res.write('Hello There');
//     res.end();
// }).listen(5000, () => console.log('Server running..'));
