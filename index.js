// Class constructor
// This initializes a Loan class with a loan amount, an annual percentage rate, and a length of loan
function Loan(args) {
  // args is an object, that will contain 'amount', 'apr', and 'length'
  this.amount = args.amount; // sets the parameter amount to the object's amount
  this.apr = args.apr; // sets the parameter's APR to the object's APR
  this.length = args.length; // set's the parameter's length to be the object's length
}

// Prototypical inheritance
// This adds a method 'monthlyPayment' onto the Loan class
Loan.prototype.monthlyPayment = function() {
  // You can use `this.amount` or `this.apr` to get values for the current class object
  // Add your code here

  return payment;
}

// Add a prototype method called 'monthlyInterest' onto the Loan class
// Instead of using the loan amount in the function, pass in a local variable 'currentAmount'


module.exports = Loan;
