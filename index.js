const express = require('express');
const bodyParser = require('body-parser');
const botRouter = require('./routers/bot');

app = express();
app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use('/bot', botRouter);

app.get('/', function (req, res) {
    res.send('Welcome to Earth\'s chat bot');
});

app.listen(app.get('port'), function () {
    console.log(`Node app is running on port ${app.get('port')}`);
});