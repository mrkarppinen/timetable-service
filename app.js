const express = require('express');
const app = express();

const lineApi = require('./api/line');
const port = process.env.PORT || 3001;


app.use('/api', lineApi);

app.use('/', (req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`app listen in port ${port}`);
});