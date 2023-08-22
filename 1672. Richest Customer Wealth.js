/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  // Initialize the variable to store the maximum wealth.
  let maxWealth = 0;

  // Loop through each customer's wealth information.
  for (let i = 0; i < accounts.length; i++) {
    // Initialize a temporary variable to calculate the wealth of the current customer.

    let tempWealth = 0;

    // Loop through each account's balance of the current customer.
    for (let j = 0; j < accounts[i].length; j++) {
      // Sum up the account balances to calculate the total wealth of the current customer.

      tempWealth += accounts[i][j];
    }

    // Compare the current customer's wealth with the maximum wealth found so far.
    // Update the maximum wealth if the current customer's wealth is greater.
    if (tempWealth > maxWealth) {
      maxWealth = tempWealth;
    }
  }
  return maxWealth;
};
