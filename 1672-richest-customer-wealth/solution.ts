export default function maximumWealth(accounts: number[][]): number {
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
  return Math.max(...richestCustomer)
};
