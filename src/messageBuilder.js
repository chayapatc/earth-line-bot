const { messageType } = require('./constants');
const ruleProcessor = require('./ruleProcessor');

const messageBuilder = function (message) {
    if (message.type !== messageType.TEXT) {
        return [
            {
                type: messageType.TEXT,
                text: 'อะไรนะ เราไม่เข้าจาย'
            }
        ];
    }

    const matched = ruleProcessor.match(message);
    if (matched) {
        return [
            {
                type: matched.rule.msgType,
                text: matched.rule.replyMessage.replace('{captured}', matched.captured)
            }
        ];
    }

    return [
        {
            type: messageType.TEXT,
            text: 'Hello'
        }
    ];
}

module.exports = messageBuilder;