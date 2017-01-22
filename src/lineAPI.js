const { line } = require('./constants');

const channelAccessToken = 'BDVFtfzeH17YRD+wdNT/AulcnDRxlA4wtvibKCmX7zh7tMQRQp0nPtGxWtGS3ZWhXwq/5oT5odP/c0zM4kSuPOaR+7AHGBT18HJGWdRLfdDpG7a3SVgXH09lYgsAMuVUvuk7CyXx8GFQiGdJPqwFCAdB04t89/1O/w1cDnyilFU=';

const verify = function () {
    const options = {
        method: 'GET',
        url: line.endpoint + '/v1/oauth/verify',
        headers: {
            'Authorization': `Bearer ${channelAccessToken}`
        },
        json: true
    };

    return new Promise(function (resolve, reject) {
        request(options, function (err, res, body) {
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
        headers: {
            'Authorization': `Bearer ${channelAccessToken}`
        },
        json: true,
        body: {
            replyToken,
            messages
        }
    };

    return new Promise(function (resolve, reject) {
        request(options, function (err, res, body) {
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

module.exports = {
    verify,
    reply
};