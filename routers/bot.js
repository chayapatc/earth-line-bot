const express = require('express');
const lineAPI = require('../src/lineAPI');
const messageBuilder = require('../src/messageBuilder');

const router = express.Router();

const senders = [];

router.post('/', function (req, res) {
    res.send('OK');

    if (!req.body.events) {
        return;
    }

    req.body.events.forEach(event => {
        if (senders.indexOf(event.source.userId) === -1) {
            senders.push(event.source.userId);
        }

        const replyToken = event.replyToken;
        lineAPI.reply(replyToken, messageBuilder(event.message))
            .then(
                result => console.log('Successful reply to %s id: %s', event.source.type, event.source.userId),
                err => console.error('Error to reploy to %s id: %s', event.source.type, event.source.userId, err)
            );
    });
});

router.get('/multicast', function (req, res) {
    res.send('OK');
    
    const messages = [
        {
            type: 'text',
            text: req.query.msg ? req.query.msg : 'This message send via multicast API'
        }
    ];

    lineAPI.multicast(senders, messages)
        .then(
            result => console.log('Success sending multicast'),
            error => console.error('Error on sending multicast')
        );
});

router.get('/verify', function (req, res) {
    lineAPI.verify()
        .then(
            result => res.send(result),
            err => res.status(400).send(err)
        );
})

module.exports = router;