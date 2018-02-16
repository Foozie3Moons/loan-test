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
  var monthlyRate = this.apr / 12;
  var totalPayments = this.length * 12;
  var monthlyPayment = (monthlyRate / (1 - Math.pow((1 + monthlyRate), -totalPayments)) * this.amount);
  var payment = Math.round(monthlyPayment * 100) / 100;

  return payment;
}

Loan.prototype.monthlyInterest = function(currentAmount) {
  // Add your code here
  var interest = currentAmount * this.apr / 12;
  interest = Math.round(interest * 100) / 100;
  return interest;
}

module.exports = Loan;
