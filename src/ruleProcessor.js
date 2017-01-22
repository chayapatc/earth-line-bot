const { messageType } = require('./constants');

const rules = [
    {
        pattern: '(?:สวัสดีเราชื่อ) ?(.*)$',
        replyMessage: 'สวัสดี{captured} เราเอิร์ธนะ',
        msgType: messageType.TEXT
    },
    {
        pattern: 'hi',
        replyMessage: 'Hello',
        msgType: messageType.TEXT
    },
    {
        pattern: 'สวัสดี',
        replyMessage: 'สวัสดี',
        msgType: messageType.TEXT
    },
    {
        pattern: 'เอิร์ธ|Earth',
        replyMessage: 'ว่าไง',
        msgType: messageType.TEXT
    },
    {
        pattern: 'อากาศ',
        replyMessage: '',
        msgType: messageType.TEMPLATE
    }
];

const matchRule = function (message) {
    for (let i=0; i < rules.length; i++) {
        let rule = rules[i];
        let regEx = new RegExp(rule.pattern, 'i');
        let matched = message.text.match(regEx);
        
        if (matched) {
            return {
                rule: rule,
                captured: matched[1] || ''
            };
        }
    }

    return null;
};

module.exports = {
    match: matchRule
};
