//Arrange
const executeCommands = require("../src/rover");

describe("test Mars Rover with invalid inputs ⛔️⛔️⛔️", () => {
  it("test invalid input ⛔️", () => {
    const input = "";
    const errorString = "Input is invalid";
    //Act & Assert
    expect(() => {
      executeCommands(input);
    }).toThrow(errorString);
  });
  it("test invalid plateau dimensions ⛔️", () => {
    const input = "invalid dimension\n0 0 N\nMM";
    const errorString = "Plateau cannot be initialised due to an error in the dimensions";
    //Act & Assert
    expect(() => {
      executeCommands(input);
    }).toThrow(errorString);
  });
  it("test invalid coordinates ⛔️", () => {
    const input = "1 1\nyo yo N\nXY";
    const errorString = "Vehicle coordinate(s) invalid";
    //Act & Assert
    expect(() => {
      executeCommands(input);
    }).toThrow(errorString);
  });
  it("test invalid orientation ⛔️", () => {
    const input = "1 1\n0 0 X\nMM";
    const errorString = "Vehicle orientation is invalid";
    //Act & Assert
    expect(() => {
      executeCommands(input);
    }).toThrow(errorString);
  });
  it("test invalid instruction ⛔️", () => {
    const input = "1 1\n0 0 N\nXY";
    const errorString = "Vehicle instruction is invalid";
    //Act & Assert
    expect(() => {
      executeCommands(input);
    }).toThrow(errorString);
  });
});

describe("test Mars Rover with out-of-plateau boundry coordinates 🔎🔎🔎", () => {
  it("test for placing a rover on an out of north-side boundary location on a 1x1 grid 🔎", () => {
    const input = "1 1\n2 1 N\nMM";
    const errorString = "Cannot land outside of the plateau";
    //Act & Assert
    expect(() => {
      executeCommands(input);
    }).toThrow(errorString);
  });
  it("test for placing a rover on an out of south-side boundary location on a 1x1 grid 🔎", () => {
    const input = "1 1\n1 -1 N\nMM";
    const errorString = "Cannot land outside of the plateau";
    //Act & Assert
    expect(() => {
      executeCommands(input);
    }).toThrow(errorString);
  });
  it("test for placing a rover on an out of west-side boundary location on a 1x1 grid 🔎", () => {
    const input = "1 1\n-1 1 N\nMM";
    const errorString = "Cannot land outside of the plateau";
    //Act & Assert
    expect(() => {
      executeCommands(input);
    }).toThrow(errorString);
  });
  it("test for placing a rover on an out of east-side boundary location on a 1x1 grid 🔎", () => {
    const input = "1 1\n0 2 N\nMM";
    const errorString = "Cannot land outside of the plateau";
    //Act & Assert
    expect(() => {
      executeCommands(input);
    }).toThrow(errorString);
  });
});

describe("test Mars Rover wall clashes 💥💥💥", () => {
  it("test for Rover 1 on a 1x1 grid clashing the north-side wall 💥", () => {
    const input = "1 1\n0 0 N\nMM";
    const errorString = "Reached the edge of the plateau";
    //Act & Assert
    expect(() => {
      executeCommands(input);
    }).toThrow(errorString);
  });
  it("test for Rover 2 on a 1x1 grid clashing the south-side wall 💥", () => {
    const input = "0 0 N\nRRM";
    const errorString = "Reached the edge of the plateau";
    //Act & Assert
    expect(() => {
      executeCommands(input);
    }).toThrow(errorString);
  });
  it("test for Rover 3 on a 1x1 grid clashing the west-side wall 💥", () => {
    const input = "0 0 N\nLM";
    const errorString = "Reached the edge of the plateau";
    //Act & Assert
    expect(() => {
      executeCommands(input);
    }).toThrow(errorString);
  });
  it("test for Rover 4 on a 1x1 grid clashing the east-side wall 💥", () => {
    const input = "0 0 N\nRMM";
    const errorString = "Reached the edge of the plateau";
    //Act & Assert
    expect(() => {
      executeCommands(input);
    }).toThrow(errorString);
  });
});

describe("test Mars Rover navigation in a square 5x5 grid", () => {
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
