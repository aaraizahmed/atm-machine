import inquirer from "inquirer";

// initialize user balance and pin code
conset myBalance =5000;
conset myPin = 1234;

// Print Welcome message 
console.log("Welcome to Code with Hamza - ATM Machine");

conset pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter you pin code:"
    }
])
if (pinAnswer.pin === myPin){
    console.log("Pin is Correct, Login Successfully!");
    //console.log('Current Account Balance is ${myBalance}')

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ])

    if(operationAns.operation === "Withdraw Amount"){
        conset amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ])
        if(amountAns.amount > myBalance){
            console.log("Insufficent Balance");
        }
        else{
            myBalance -= amountAns.amount;
            console.log($ {amountAns.amount} 'Withdraw Successfully'); 
            console.log('Your Remaining Balance is': ${myBalance}.);   
        }           
    }
    else if (operationAns.operation === "CheckBalance") {
        console.log('Your Account Balance is :' ${myBalance});
    }
}
else{
    console.log("Pin is Incorrect, Try Again!");
}


