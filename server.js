const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Stremio Trakt Auth service running');
});

app.get('/run', (req, res) => {
  exec('node script.js', (error, stdout, stderr) => {
    if (error) {
      console.error('Error running script:', error);
      return res.status(500).send('Error running script');
    }
    console.log('Script output:', stdout);
    res.send(`Script output:<br><pre>${stdout}</pre>`);
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
