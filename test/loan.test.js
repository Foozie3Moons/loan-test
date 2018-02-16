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
    assert.strictEqual(payment, 86.07);
    // BDD
    expect(payment).to.equal(86.07);
    payment.should.equal(86.07);
  });

  it.skip('should return 123.37 when given 4.5% APR, 10 year term, and 12000 balance', function() {
    var loan = new Loan({
      apr: 0.045,
      length: 10,
      amount: 12000
    });
    var payment = loan.monthlyPayment();
    assert.strictEqual(payment, 124.37);
  });

  it.skip('should return 93.22 when given 4.5% APR, 5 year loan, and 5000 balance', function() {
    var loan = new Loan({
      apr: 0.045,
      length: 5,
      amount: 5000
    });
    var payment = loan.monthlyPayment();
    assert.strictEqual(payment, 93.22);
  });

  it.skip('should return 987.80 when given 2.5% APR, 30 year loan, and 250000 balance', function() {
    var loan = new Loan({
      apr: 0.025,
      length: 30,
      amount: 250000
    });
    var payment = loan.monthlyPayment();
    assert.strictEqual(payment, 987.80);
  })

});

describe('Monthly Interest', function() {

  it.skip('should return 20.63 when given a 4.5% APR and 5500 current balance', function() {
    var loan = new Loan({
      apr: 0.045,
    });
    var interest = loan.monthlyInterest(5500);
    assert.strictEqual(interest, 20.63);
    console.log(interest);
  });

  it.skip('should return 507.03 when given a 2.5% APR and 243373 current balance', function() {
    var loan = new Loan({
      apr: 0.025
    });
    var interest = loan.monthlyInterest(243373);
    assert.strictEqual(interest, 507.03);
  })

});
