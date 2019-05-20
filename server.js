// Main starting point of the application
const express = require('express');
require('dotenv').config()
const path = require('path');
//const http = require('http');
//const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes/router');
const mongoose = require('mongoose');
// const cors = require('cors');  // we don't need it anymore, because we use proxy server instead

const app = express();

const uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/writ-ink';

mongoose.connect(uristring, {useNewUrlParser: true, useCreateIndex: true}, function (err, res) {
    if (err) {
    console.log (`ERROR connecting to: ${uristring} - ${err}`);
    } else {
    console.log (`Succeeded connected to: ${uristring}`);
    }
});

// DB Setup (connect mongoose and instance of mongodb)
//mongoose.connect('mongodb://localhost:writ-ink/writ-ink');

// App Setup (morgan and body-parser are middleware in Express)
app.use(express.json({ extended: false }));
app.use(morgan('combined'));  // middleware for logging
//app.use(bodyParser.json({ type: '*/*' }));  // middleware for helping parse incoming HTTP requests
// app.use(cors());  // middleware for circumventing (规避) cors error

// Router Setup
router(app);

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

// Server Setup
const PORT = process.env.PORT || 3090;
//const server = http.createServer(app);
// server.listen(port);
// console.log('Server listening on: ', port);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
