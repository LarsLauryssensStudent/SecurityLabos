const CryptoJS = require('crypto-js');
const {database} = require('./database');
const security = require('./security');
const readline = require('readline-sync');

let login = (email, password) => {
    const hashedPassword = CryptoJS.PBKDF2(password, security.salt, {
        iterations: security.iterations,
    }).toString(CryptoJS.enc.Hex);
    return database.find((user) => user.email === email && user.password === hashedPassword);
}

const email = readline.question('email: ');
const password = readline.question('password: ');

if (login(email, password)) {
    console.log('You are succesfully logged in.');
} else {
    console.log('Cannot login.')
}