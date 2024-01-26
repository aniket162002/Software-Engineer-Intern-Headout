const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;

app.get('/data', (req, res) => {
  const { n, m } = req.query;

  if (!n) {
    return res.status(400).send('File name (n) is required.');
  }

  const filePath = path.join('/tmp/data', `${n}.txt`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send(`File ${n}.txt not found.`);
  }

  if (m) {
    const line = readSpecificLine(filePath, parseInt(m, 10));
    res.send(line);
  } else {
    const content = fs.readFileSync(filePath, 'utf8');
    res.send(content);
  }
});

function readSpecificLine(filePath, lineNumber) {
  const data = fs.readFileSync(filePath, 'utf8').split('\n');
  return data[lineNumber - 1] || '';
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

