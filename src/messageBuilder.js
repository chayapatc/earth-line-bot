const { messageType } = require('./constants');
const ruleProcessor = require('./ruleProcessor');

const messageBuilder = function (message) {
    if (message.type !== messageType.TEXT) {
        return [
            {
                type: messageType.TEXT,
                text: 'ช่วยพิมพ์ข้อความมาเถอะ เราไม่เข้าใจ'
            }
        ];
    }

    const matched = ruleProcessor.match(message);
    if (!matched) {
        return [
            {
                type: messageType.TEXT,
                text: 'อะไรนะ เราไม่เข้าจาย'
            }
        ];
    }

    switch (matched.rule.msgType) {
        case messageType.TEMPLATE:
            return [
                {
                    "type": matched.rule.msgType,
                    "alt": matched.rule.replyMessage.text || '',
                    "template": matched.rule.replyMessage
                }
            ];
        case messageType.TEXT:
            return [
                {
                    type: matched.rule.msgType,
                    text: matched.rule.replyMessage.replace('{captured}', matched.captured)
                }
            ];
        default:
            console.error('Not supported message type: %s', matched.rule.msgType);
    }

}

module.exports = messageBuilder;