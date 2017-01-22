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
        pattern: 'อากาศ|อากาศดีมั้ย|ฝนตกมั้ย',
        replyMessage: {
            "type": "buttons",
            "thumbnailImageUrl": "https://goo.gl/7Rgamb",
            "title": "Menu",
            "text": "Mostly Sunny in Bangkok, 31°C",
            "actions": [
                {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "https://goo.gl/SPm2vi"
                }
            ]
        },
        msgType: messageType.TEMPLATE
    },
    {
        pattern: 'ร้านอร่อยแถวบ้าน',
        msgType: messageType.TEMPLATE,
        replyMessage: {
            "type": "carousel",
            "text": "เอาไปเลย 5 ร้าน",
            "columns": [
                {
                    "thumbnailImageUrl": "https://s3-ap-southeast-1.amazonaws.com/photo.wongnai.com/photos/2014/09/07/97702e51b47044c18bff9c1a4f92c652.jpg",
                    "title": "ชัยครับ",
                    "text": "ร้านอาหาร ที่หลบอยู่ในหมู่บ้าน ใกล้ๆกับวัดโสธร",
                    "actions": [
                        {
                            "type": "uri",
                            "label": "View detail",
                            "uri": "https://goo.gl/1xQ95i"
                        }
                    ]
                },
                {
                    "thumbnailImageUrl": "https://s3-ap-southeast-1.amazonaws.com/photo.wongnai.com/photos/2015/04/18/3361efbb64174baf92fb1f0529afbd68.jpg",
                    "title": "เจ๊จุ๊ ก๋วยเตี๋ยวปากหม้อ",
                    "text": "ปากหม้อ 8ตัว มาพร้อมน้ำซุปร้อนๆ หวานดี มีเมล็ดผักชีในซุปด้วย",
                    "actions": [
                        {
                            "type": "uri",
                            "label": "View detail",
                            "uri": "https://goo.gl/6rDaVj"
                        }
                    ]
                },
                {
                    "thumbnailImageUrl": "https://s3-ap-southeast-1.amazonaws.com/photo.wongnai.com/photos/2014/09/07/97702e51b47044c18bff9c1a4f92c652.jpg",
                    "title": "ชัยครับ",
                    "text": "ร้านอาหาร ที่หลบอยู่ในหมู่บ้าน ใกล้ๆกับวัดโสธร",
                    "actions": [
                        {
                            "type": "uri",
                            "label": "View detail",
                            "uri": "https://goo.gl/1xQ95i"
                        }
                    ]
                },
                {
                    "thumbnailImageUrl": "https://s3-ap-southeast-1.amazonaws.com/photo.wongnai.com/photos/2015/04/18/3361efbb64174baf92fb1f0529afbd68.jpg",
                    "title": "เจ๊จุ๊ ก๋วยเตี๋ยวปากหม้อ",
                    "text": "ปากหม้อ 8ตัว มาพร้อมน้ำซุปร้อนๆ หวานดี มีเมล็ดผักชีในซุปด้วย",
                    "actions": [
                        {
                            "type": "uri",
                            "label": "View detail",
                            "uri": "https://goo.gl/6rDaVj"
                        }
                    ]
                },
                {
                    "thumbnailImageUrl": "https://s3-ap-southeast-1.amazonaws.com/photo.wongnai.com/photos/2014/09/07/97702e51b47044c18bff9c1a4f92c652.jpg",
                    "title": "ชัยครับ",
                    "text": "ร้านอาหาร ที่หลบอยู่ในหมู่บ้าน ใกล้ๆกับวัดโสธร",
                    "actions": [
                        {
                            "type": "uri",
                            "label": "View detail",
                            "uri": "https://goo.gl/1xQ95i"
                        }
                    ]
                }
            ]
        }
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
