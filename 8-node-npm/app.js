const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('yoga@gmail.com'));
// console.log(validator.isMobilePhone('08023456785454', 'id-ID'));
// console.log(validator.isNumeric('08a023456785454'));

const nama = 'Yoga Ganteng';
console.log(chalk.black.bgBlue('Hello World!'));
const pesan = chalk`asajsanjn {bgBlue aksjak khasjkb} savbn {red dvabnsd habshab} hasbavsn asajs {bgWhite.red.bold.strikethrough ${nama}}`;
console.log(pesan);
