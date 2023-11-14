const accounts1 = [[1, 2, 3], [3, 2, 1]]
const accounts2 = [[1, 5], [7, 3], [3, 5]]
const accounts3 = [[2, 8, 7], [7, 1, 3], [1, 9, 5]]

function maximumWealth(accounts: number[][]): number {
  // for every customer
  let a = 0
  let richestCustomer: number[] = []
  let sum = 0
  while (a < accounts.length) {
    // get amount of accounts
    for(let b = 0; b < accounts[a].length; b++){
      // get amount of money
      sum += accounts[a][b]
  
    }
    a++
    richestCustomer.push(sum) 
    sum = 0
  }
  console.log(richestCustomer)
  return Math.max(...richestCustomer)
};

console.log(maximumWealth(accounts1)) // 6
console.log(maximumWealth(accounts2)) // 10
console.log(maximumWealth(accounts3)) // 17