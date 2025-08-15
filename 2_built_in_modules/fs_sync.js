const fs = require('fs');
const path = require('path');

console.log('start');

const firstText_filepath = path.join(__dirname, 'examplefolder', 'firstText.txt');
const firstText = fs.readFileSync(firstText_filepath, 'utf8');

const secondtText_filepath = path.join(__dirname, 'examplefolder', 'secondText.txt');
const secondText = fs.readFileSync(secondtText_filepath, 'utf8');

// console.log(firstText);
// console.log(secondText);

// write method
const data = "beauty"
const newText = fs.writeFileSync(
  path.join(__dirname, 'examplefolder', 'newText.txt'),
  `this text is writen to this file with ${data}`
)
console.log('done with the writing task');


console.log('starting the next task');