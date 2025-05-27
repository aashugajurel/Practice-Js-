 // Create a function that divides two numbers. If the denominator is 0, throw and handle a “Division by Zero” error.

function divide(a,b){
    if (b === 0){
        throw new SyntaxError("Cannot be divide by 0");
    }
    return a/b;

}
try{
    result = divide(10,2);
    console.log(result);
}catch(error){
    console.log(error);
}

// Define a custom error class InvalidEmailError and throw it if a function receives an invalid email string.


class InvalidEmailError extends Error{
    constructor(message){
        super(message);
        this.name = "InvalidEmailError";
    }
}
function isInvalidError(email){
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = emailRegex.test(email);
     if(!isValid){
        throw new InvalidEmailError("Email format is not valid");
    }

    return true;
}
try{
    let authenticated = isInvalidError("abc@gmail.com");
    if(authenticated){
        console.log("Email is authorized ");
    }
}catch(error){
    console.log(error);
}



// Write a function that accepts a string and returns the uppercase version. If the input is not a string, throw an error and catch it.


function isString(a){
    if (!(typeof(a) === 'string')){
        throw new SyntaxError("Entered data is not string");
    }
    return a.toUpperCase();
}
try{
    result = isString("bhuwan");
    console.log(result);
}
catch(error){
    console.log(error);
}

//Create a bank withdrawal function that throws a BalanceError if the amount to withdraw is more than the available balance.
// Custom error class for balance limit
class BalanceError extends Error {
    constructor(message) {
        super(message);
        this.name = "BalanceError";
    }
}

function withdraw(balance, amount) {
    if (amount > balance) {
        throw new BalanceError("Insufficient balance for withdrawal.");
    }

    return balance - amount;
}

try {
    let currentBalance = 5000;
    let withdrawalAmount = 6000; 

    let remaining = withdraw(currentBalance, withdrawalAmount);
    console.log(`Withdrawal successful. Remaining balance: Rs. ${remaining}`);
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}
