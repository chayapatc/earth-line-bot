const messageType = {
    TEXT: 'text',
    IMAGE: 'image',
    VIDEO: 'video',
    AUDIO: 'audio',
    LOCATION: 'location',
    STICKER: 'sticker',
    IMAGEMAP: 'imagemap',
    TEMPLATE: 'template'
};

const line = {
    endpoint: 'https://api.line.me'
};

module.exports = {
    messageType,
    line
};