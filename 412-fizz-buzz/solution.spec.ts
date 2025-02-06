import fizzBuzz from './solution'; 

describe('describe test', () => {
  it('test 3', () => {
    // Assert
    expect(fizzBuzz(3)).toEqual(["1","2","Fizz"]);
  });

  it('test 15', () => {
    // Assert
    expect(fizzBuzz(15)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
  });

});