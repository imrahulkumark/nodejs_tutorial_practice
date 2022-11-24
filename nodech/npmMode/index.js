const chalk = require("chalk");

const validator = require("validator")

// import chalk from 'chalk';


console.log(chalk.blue('Hello world!'));

console.log(chalk.red.underline.inverse("false"))

console.log(chalk.green.underline.inverse("true"))

console.log(chalk.green.underline.inverse("true"))



const res = validator.isEmail("thapa@thapa.com")

console.log(res);




// const chalk = require("chalk");
// console.log(chalk.green("Hello World"));