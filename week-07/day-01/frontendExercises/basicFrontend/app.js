/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('OK!');
});

app.listen(port, () => {
  console.log(`connecting through port ${port}`);
});
