const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));
const rpsls = require('./lib/lib/rpsls')

const app = express();
const port = args.port ? args.port : 5000;

app.get('/app/', (req, res) => {
    res.status(200);
    res.send('200 OK');
});

app.get('/app/rps/', (req, res) => {
    res.send(rpsls.rps());
});

app.get('/app/rpsls/', (req, res) => {
    res.send(rpsls.rpsls());
});



// All other (invalid) routes here
app.get('*', (req, res) => {
    res.status(404);
    res.send('404 NOT FOUND');
});

app.listen(port);