const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js');

console.log(getNotes());

console.log(validator.isEmail('sdkjcdsb@sdfljkvnd.com'));

console.log(chalk.red.bold('Error!!'));