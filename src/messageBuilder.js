const rules = [
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
    },
    {
        pattern: '(?:สวัสดีเราชื่อ)*(.*)',
        replyMessage: 'สวัสดี{captured} เราเอิร์ธนะ'
    }
];

const messageBuilder = function (message) {
    if (message.type !== 'text') {
        return [];
    }


    for (let i=0; i < rules.length; i++) {
        let regEx = new RegExp(rule.pattern, 'i');
        let matched = rules.match(regEx);
        if (matched.length > 0) {
            return [
                {
                    type: 'text',
                    text: rule.replyMessage.replace('{captured}', matched[1])
                }
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