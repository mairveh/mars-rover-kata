//Arrange
const executeCommands = require("../src/rover");

describe("test Mars Rover inputs with failing edge scenarios", () => {
  it("test invalid input", () => {
    const input = "";
    //Act
    const resultString = "Input is invalid";
    //Assert
    expect(() => {
      executeCommands(input);
    }).toThrow(resultString);
  });
});

describe("test Mars Rover inputs in a 5x5 grid", () => {
  it("test for Rover 1 on 5x5 grid", () => {
    const input = "5 5\n1 2 N\nLMLMLMLMM";
    const expectedResult = "1 3 N";
    //Act
    const result = executeCommands(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  it("test for Rover 2 on 5x5 grid", () => {
    const input = "3 3 E\nMMRMMRMRRM";
    const expectedResult = "5 1 E";
    //Act
    const result = executeCommands(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
});
