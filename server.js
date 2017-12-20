const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4200;

app.use(express.static('dist'))

app.listen(port, () => console.log(`Connected to server on localhost: ${port}`));
