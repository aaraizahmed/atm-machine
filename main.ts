import inquirer from "inquirer";

interface UserAnswers{
    userID: string;
    userPIN: number;
    accountTYPE: string;
    transactionType: string;
    amount:number
}

async function startATMconversation (){
    console.log("welcome to islamic bank!");


const answers: UserAnswers = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "kindly enter your userID:"
    },
    {
        type: "number",
        name: "userPIN",
        message: "kindly enter your user PIN:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current","Saving"],
        message: "Select your Account Type:"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fastcash withdrawal", "Normal withdrawal"],
        message: "Select your transactionType:",
        when(answers){
            return answers.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 5000, 10000, 20000],
        message: "Select your amount:",
        when(answers){
            return answers.transactionType === "Fastcash withdrawal";
        }
    },
    {
            type:"number",
            name: "amount",
            message: "Enter your amount:",
            when(answers){
                return answers.transactionType === "Normal withdrawal";
            }
        },
]);

if(answers.userID && answers.userPIN){
    console.log("Processing your request...");
    const balance = Math.floor(Math.random()*10000000000);
    console.log("Your current balance is: PKR", balance.toLocaleString());
    const enteredAmount = answers.amount

    if(balance >=enteredAmount){
        const remainingBalance = balance - enteredAmount;
        console.log("Transaction is successfull. Your remaining balance is: PKR ",remainingBalance.toLocaleString());     
    } else {
        console.log("insufficient balance. Please try again with a lower amount.")
    }

}

}

startATMconversation ();