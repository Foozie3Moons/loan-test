var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var assert = require('assert');

var Loan = require('../index.js');

describe('Monthly Payment', function() {

  it('should return 86.07 when given 6% APR, 1 year term, and 1000 balance', function() {
    var loan = new Loan({
      apr: 0.06,
      length: 1,
      amount: 1000
    });
    var payment = loan.monthlyPayment();
    // all these tests below are equivalent
    // TDD
    assert.strictEqual(86.07, payment);
    // BDD
    expect(payment).to.equal(86.07);
    payment.should.equal(86.07);
  });

  it('should return 123.37 when given 4.5% APR, 10 year term, and 12000 balance', function() {
    var loan = new Loan({
      apr: 0.045,
      length: 10,
      amount: 12000
    });
    var payment = loan.monthlyPayment();
    assert.strictEqual(124.37, payment);
  });

  it('should return 93.22 when given 4.5% APR, 5 year loan, and 5000 balance', function() {
    var loan = new Loan({
      apr: 0.045,
      length: 5,
      amount: 5000
    });
    var payment = loan.monthlyPayment();
    assert.strictEqual(93.22, payment);
  });

});

describe('Monthly Interest', function() {

  it('should return 20.63 when given a 4.5% APR, 5 year loan, and 5000 balance', function() {
    var loan = new Loan({
      apr: 0.045,
      length: 5,
      amount: 7000
    });
    var interest = loan.monthlyInterest(5500);
    assert.strictEqual(20.63, interest);
    console.log(interest);
  });

});
