const path = require('path');

// platform specific separator
// (/ for unix) (\ for windows)
console.log(path.sep);

const someFilepath = path.join('content', 'subfolder', 'file.text');
console.log(someFilepath);

const base = path.basename(someFilepath);
console.log(base); // file.txt


// accepts some path segemnts and resolves to an absolute path
const absolute = path.resolve(__dirname, 'examplefolder', 'subfolder', 'example.txt');
console.log(absolute);

