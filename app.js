const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000; // You can choose any port you like

const folderPath = '/data/myapp'; // Replace with the path to your mounted folder

app.get('/', (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      res.status(500).send('Internal Server Error');
    } else {
      // Generate an HTML page with links to download each file
      const fileLinks = files.map((file) => {
        const filePath = path.join(folderPath, file);
        return `<li><a href="/download?file=${encodeURIComponent(filePath)}">${file}</a></li>`;
      }).join('');
      const htmlResponse = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>99.9% Created With Chat GPT</title>
          </head>
          <body>
            <h1>Files in the Directory:</h1>
            <ul>${fileLinks}</ul>
          </body>
        </html>
      `;
      res.send(htmlResponse);
    }
  });
});

app.get('/download', (req, res) => {
  const filePath = req.query.file;
  res.download(filePath);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});