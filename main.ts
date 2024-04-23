import inquirer from "inquirer" ; 

const  CurrencyRates :any  = {
    USD: 1, // Base Currency 
    EUR: 0.91, 
    GBP : 0.76, 
    INR: 75,
    PKR: 280, 
    AFG: 72 , 

};

let userAnswer = await inquirer.prompt([
   { 
    name : "from", 
    message: "Enter from currency",
    type : "list", 
    choices : ["USD" , "EUR", "GBP", "INR", "PKR", "AFG"] , 
 },

    {
        name : "to", 
        message: "Enter to currency",
        type : "list", 
        choices : ["USD" , "EUR", "GBP", "INR", "PKR" , "AFG"] , 
    },

    {
        name : "Amount", 
        message : "Enter your Amount", 
        type : 'number', 
    }
]) 

let fromAmount = CurrencyRates[userAnswer.from] //usd          // by this the user entered currency will be shown here and rate will be taken 
let toAmount = CurrencyRates[userAnswer.to]   //PKr (280rs)        // by this the user's entered currency will ve shown here with its rate
let Amount = userAnswer.Amount         // $200                      // here we made variable that have the amount from the 3rd question
let baseAmount = Amount/fromAmount ;  // 200 / 1
let convertedAmount = baseAmount * toAmount  // 200*280 = 56000

console.log(convertedAmount) ; 




