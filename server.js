'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static('editor'))
app.use('/build',express.static(__dirname + '/build'));
app.use('/examples',express.static(__dirname + '/examples'));
app.use('/',express.static(__dirname + '/WASM'));
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);