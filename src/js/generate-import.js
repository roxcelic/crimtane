const fs = require('fs');
const path = require('path');
const sourceImportJsPath = path.join(__dirname, 'import.js');
const distDir = 'dist';
const distImportJsPath = path.join(distDir, 'import.js'); 
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}
const importContent = fs.readFileSync(sourceImportJsPath, 'utf8');
fs.writeFileSync(distImportJsPath, importContent, 'utf8');
console.log('import.js has been copied to the dist folder');
