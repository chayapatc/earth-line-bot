const express = require('express');
const LineBot = require('../src/LineBot');
const messageBuilder = require('../src/messageBuilder');

const channelAccessToken = 'BDVFtfzeH17YRD+wdNT/AulcnDRxlA4wtvibKCmX7zh7tMQRQp0nPtGxWtGS3ZWhXwq/5oT5odP/c0zM4kSuPOaR+7AHGBT18HJGWdRLfdDpG7a3SVgXH09lYgsAMuVUvuk7CyXx8GFQiGdJPqwFCAdB04t89/1O/w1cDnyilFU=';

const lineBot = new LineBot(channelAccessToken);

const router = express.Router();

router.post('/', function (req, res) {
    res.send('OK');

    if (!req.body.events) {
        return;
    }

    req.body.events.forEach(event => {
        const replyToken = event.replyToken;
        lineBot.reply(replyToken, messageBuilder(event.message))
            .then(
                result => console.log('Successful reply to user id: ' + event.source.userId),
                err => console.error('Error to reploy to user id:' + event.source.userId, err)
            );
    });
});

router.get('/verify', function (req, res) {
    lineBot.verify()
        .then(
            result => res.send(result),
            err => res.status(400).send(err)
        );
})

module.exports = router;