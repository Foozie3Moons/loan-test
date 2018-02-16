## Loan Calculator

You're tasked with writing an app that can accurately calculate monthly payments and interest on a loan. Here are some things to consider:

### Monthly Payment

1. Get the monthly interest rate (rate is currently Annual)
2. Get the total monthly payments (length is currently yearly)
3. You're given this formula for calculating payment:
- `p = r * la / (1 - (1 + r) ^ -n)`
  - p = payment
  - la = loan amount
  - r = monthly rate
  - n = total payments
4. When multiplying your loan amount by a percentage, you get a float. Banks usually round to the nearest hundredth. How will we account for this?

###

## Instructions

You have a test suite with tests that you need to make pass. They are all disabled except the first one right now. To enable a test, remove the x from in from of the it() function. Enable one test at a time and make it pass before enabling the next.

1. Fork and clone this repo.
1. Run `sudo npm install -g mocha` to globally install mocha.
1. Run `npm install` to install the dependencies.
1. Run `npm test` to run the test suite.
