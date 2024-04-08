import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1, //base currecny
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    CAD: 1.26,
    AUD: 1.31,
    JPY: 110.25,
};
console.log("***********************************");
console.log(chalk.red("     Currency Converter"));
console.log("***********************************");
let answer = await inquirer.prompt([
    {
        message: chalk.green("Enter From currency"),
        name: "from",
        type: "list",
        choices: Object.keys(currency)
    },
    {
        message: chalk.green("Enter To currency"),
        name: "to",
        type: "list",
        choices: Object.keys(currency)
    },
    {
        message: chalk.green("Enter Amount"),
        name: "amount",
        type: "number",
    }
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let userAmount = answer.amount;
let baseAmount = userAmount / fromAmount; //convert ino base currecny (dollar)
let convetAmount = baseAmount * toAmount;
console.log(chalk.blue(convetAmount));
