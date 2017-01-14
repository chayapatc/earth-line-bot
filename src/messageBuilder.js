const rules = [
    {
        pattern: '(?:สวัสดีเราชื่อ) ?(.*)$',
        replyMessage: 'สวัสดี{captured} เราเอิร์ธนะ'
    },
    {
        pattern: 'hi',
        replyMessage: 'Hello'
    },
    {
        pattern: 'สวัสดี',
        replyMessage: 'สวัสดี'
    },
    {
        pattern: 'เอิร์ธ|Earth',
        replyMessage: 'ว่าไง'
    }
];

const messageBuilder = function (message) {
    if (message.type !== 'text') {
        return [];
    }

    for (let i=0; i < rules.length; i++) {
        let rule = rules[i];
        let regEx = new RegExp(rule.pattern, 'i');
        let matched = message.text.match(regEx);
        if (matched) {
            const message = {
                type: 'text',
                text: rule.replyMessage.replace('{captured}', matched[1])
            };

            console.log('reply message:', message);

            return [
                message
            ];
        }
    }

    return [
        {
            type: 'text',
            text: 'Hello'
        }
    ];
}

module.exports = messageBuilder;