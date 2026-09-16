/**
* aiwsgrep is my version of the linux head command example
* to run it we need to: node aiwsgrep.js <FileName>
* node aiwshead.js server.log
*/
const fs = require('fs');
const path = require('path');

if(process.argv.length !== 3) {
  console.log("Missing arguments");
  console.log(`Usage: Node ${path.basename(process.argv[1])} <FileName>`);
  return;
}

let filename = process.argv[2];
let content = fs.readFileSync(filename, 'utf-8');

let lines = content.split('\n');
for (let i=0; i < 10 && i < lines.length; i++){
  console.log(lines[i]);
}

