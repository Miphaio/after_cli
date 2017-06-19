var clear = require('clear');
var chalk = require('chalk');
var figlet = require('figlet');
clear();
console.log(
  chalk.yellow(
    figlet.textSync('After.Cli', { horizontalLayout: 'full' })
  )
);