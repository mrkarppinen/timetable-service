const express = require('express');
const app = express();

const lineApi = require('./api/line');
const port = process.env.PORT || 3001;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', lineApi);

app.use('/', (req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`app listen in port ${port}`);
});