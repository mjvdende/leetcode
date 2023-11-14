import runningSum from './solution'; 

describe('runningSum', () => {
  it('calculates the running sum correctly', () => {
    // Arrange
    const inputArray = [1, 2, 3, 4];
    const expectedOutput = [1, 3, 6, 10];

    // Act
    const result = runningSum(inputArray);

    // Assert
    expect(result).toEqual(expectedOutput);
  });

  it('handles an empty array', () => {
    // Arrange
    const inputArray: number[] = [];
    const expectedOutput: number[] = [];

    // Act
    const result = runningSum(inputArray);

    // Assert
    expect(result).toEqual(expectedOutput);
  });

  it('handles an array with a single element', () => {
    // Arrange
    const inputArray = [5];
    const expectedOutput = [5];

    // Act
    const result = runningSum(inputArray);

    // Assert
    expect(result).toEqual(expectedOutput);
  });

  // Add more test cases as needed
});