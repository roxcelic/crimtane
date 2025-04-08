const fs = require('fs');
const path = require('path');

const distDir = 'dist';

const sourceScriptJsPath = path.join(__dirname, 'script.js');
const distScriptJsPath = path.join(distDir, 'script.js');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

importContent = fs.readFileSync(sourceScriptJsPath, 'utf8');
fs.writeFileSync(distScriptJsPath, importContent, 'utf8');

console.log('imports has been copied to the dist folder');
