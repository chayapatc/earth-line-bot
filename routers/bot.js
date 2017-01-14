const express = require('express');
const LineBot = require('../src/LineBot');

const channelAccessToken = 'BDVFtfzeH17YRD+wdNT/AulcnDRxlA4wtvibKCmX7zh7tMQRQp0nPtGxWtGS3ZWhXwq/5oT5odP/c0zM4kSuPOaR+7AHGBT18HJGWdRLfdDpG7a3SVgXH09lYgsAMuVUvuk7CyXx8GFQiGdJPqwFCAdB04t89/1O/w1cDnyilFU=';

const lineBot = new LineBot(channelAccessToken);

const router = express.Router();

router.post('/', function (req, res) {
    res.send('OK');
});

router.get('/verify', function (req, res) {
    lineBot.verify()
        .then(
            result => res.send(result),
            err => res.status(400).send(err)
        );
})

module.exports = router;