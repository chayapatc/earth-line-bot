const request = require('request');

class LineBot {
    constructor(channelAccessToken) {
        this.channelAccessToken = channelAccessToken;
    }
    verify() {
        const options = {
            method: 'GET',
            url: 'https://api.line.me/v1/oauth/verify',
            headers: {
                'Authorization': `Bearer ${this.channelAccessToken}`
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
    }
    reply(replyToken, messages) {
        const options = {
            method: 'POST',
            url: 'https://api.line.me/v2/bot/message/reply',
            headers: {
                'Authorization': `Bearer ${this.channelAccessToken}`
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
};

module.exports = LineBot;