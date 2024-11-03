const CryptoJS = require('crypto-js');
const utils = require('./utils');

const salt = CryptoJS.lib.WordArray.random().toString();
const iterations = 12000;

const hash = (password) => {
    let hashedPasword = CryptoJS.PBKDF2(password, salt, {
        iterations: iterations
    }).toString(CryptoJS.enc.Hex);
     // TODO: Hash this pasword.
    return hashedPasword;
}

exports.hash = utils.time(hash);
exports.salt = salt;
exports.iterations = iterations;