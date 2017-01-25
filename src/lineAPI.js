const request = require('request');
const { line } = require('./constants');

const channelAccessToken = 'BDVFtfzeH17YRD+wdNT/AulcnDRxlA4wtvibKCmX7zh7tMQRQp0nPtGxWtGS3ZWhXwq/5oT5odP/c0zM4kSuPOaR+7AHGBT18HJGWdRLfdDpG7a3SVgXH09lYgsAMuVUvuk7CyXx8GFQiGdJPqwFCAdB04t89/1O/w1cDnyilFU=';

const baseRequest = request.defaults({
    pool: {
        maxSockets: 1000,
        timeout: 60000
    },
    headers: {
        'Authorization': `Bearer ${channelAccessToken}`
    }
});

const verify = function () {
    const options = {
        method: 'GET',
        url: line.endpoint + '/v1/oauth/verify',
        json: true
    };

    return new Promise(function (resolve, reject) {
        baseRequest(options, function (err, res, body) {
            if (err) {
                return reject(err);
            }

            if (res.statusCode !== 200) {
                return reject(body);
            }

            resolve(body);
        })
    });
};

const reply = function (replyToken, messages) {
    const options = {
        method: 'POST',
        url: line.endpoint + '/v2/bot/message/reply',
        json: true,
        body: {
            replyToken,
            messages
        }
    };

    return new Promise(function (resolve, reject) {
        baseRequest(options, function (err, res, body) {
            if (err) {
                return reject(err);
            }

            if (res.statusCode !== 200) {
                return reject(body);
            }

            resolve(body);
        });
    });
}

const multicast = function (to, messages) {
    const options = {
        method: 'POST',
        url: line.endpoint + '/v2/bot/message/multicast',
        json: true,
        body: {
            to,
            messages
        }
    };

    return new Promise(function (resolve, reject) {
        baseRequest(options, function (err, res, body) {
            if (err) {
                return reject(err);
            }

            if (res.statusCode !== 200) {
                return reject(body);
            }

            resolve(body);
        });
    })
}

module.exports = {
    verify,
    reply,
    multicast
};