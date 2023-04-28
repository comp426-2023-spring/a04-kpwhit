const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

const app = express();
const port = args.port ? args.port : 5000;

app.get('/app/', (req, res) => {
    res.status(200);
    res.send('OK');
})





// All other (invalid) routes here
app.get('*', (req, res) => {
    res.status(404);
    res.send('404 NOT FOUND');
})

app.listen(port, () => console.log(`Listening on port ${port}!`));