const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

const message = 'chickens';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

const encryptedMessage = cipher.update(message, 'utf8', 'hex',) + cipher.final('hex');

console.log(encryptedMessage);