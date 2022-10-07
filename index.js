'use strict';
const app = require('./server')
const{ db } = require('./app')
const PORT = 3001

db.sync().then(() => {
app.start(PORT);})