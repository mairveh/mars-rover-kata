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

});
