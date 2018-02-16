## Loan Calculator

You're tasked with writing some code that can accurately calculate monthly payments and interest on a loan. Here are some things to consider:

### Monthly Payment

1. Get the monthly interest rate (rate is annual by default)
2. Get the total monthly payments (length is yearl by default)
3. You're given this formula for calculating payment: `p = r * la / (1 - (1 + r) ^ -n)`
  - p = payment
  - la = loan amount
  - r = monthly rate
  - n = total payments
4. When multiplying your loan amount by a percentage, you get a float. Banks usually round to the nearest hundredth. How will we account for this?

### Monthly Interest

1. All you need to do for this one is think of
2. You will be multiplying a dollar amount by a percentage, like in Monthly Payment. You will need to round your number the same way.

## Instructions

You have a test suite with tests that you need to make pass. They are all disabled except the first one right now. To enable a test, remove the `.skip` off the it() function. Enable one test at a time and make it pass before enabling the next.

1. Fork and clone this repo.
1. Run `sudo npm install -g mocha` to globally install mocha.
1. Run `npm install` to install the dependencies.
1. Run `npm test` to run the test suite.
