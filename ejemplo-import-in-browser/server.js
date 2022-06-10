const fs = require('fs');
const path = require('path');

require('http').createServer((req, res) => {
  if (req.url === '/mi-app.js') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.end(fs.readFileSync(path.resolve(__dirname, './mi-app.js'), 'utf8'));
    return;
  }
  if (req.url === '/componentes/mi-componente-header.mjs') {
    res.writeHead(200, { 'Content-Type': 'application/javascript' });
    res.end(fs.readFileSync(path.resolve(__dirname, './componentes/mi-componente-header.mjs'), 'utf8'));
    return;
  }
  if (req.url === '/componentes/mi-componente-header.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end(fs.readFileSync(path.resolve(__dirname, './componentes/mi-componente-header.css'), 'utf8'));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8'));
})
  .listen(80, () => console.log('Listening port 80'));