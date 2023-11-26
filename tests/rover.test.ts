//Arrange
import {execute} from '../src/rover'

describe("test Mars Rover invalid inputs ⛔️⛔️⛔️", () => {
  it("test invalid input ⛔️", () => {
    const input = "";
    const errorString = "Input is invalid";
    //Act & Assert
    expect(() => {
      execute(input);
    }).toThrow(errorString);
  });
  it("test invalid plateau dimensions ⛔️", () => {
    const input = "invalid dimension\\0 0 N\\MM";
    const errorString =
      "Plateau cannot be initialised due to an error in the dimensions";
    //Act & Assert
    expect(() => {
      execute(input);
    }).toThrow(errorString);
  });
  it("test invalid coordinates ⛔️", () => {
    const input = "1 1\\yo yo N\\XY";
    const errorString = "Vehicle coordinate(s) invalid";
    //Act & Assert
    expect(() => {
      execute(input);
    }).toThrow(errorString);
  });
  it("test invalid orientation ⛔️", () => {
    const input = "1 1\\0 0 X\\MM";
    const errorString = "Vehicle orientation is invalid";
    //Act & Assert
    expect(() => {
      execute(input);
    }).toThrow(errorString);
  });
  it("test invalid instruction ⛔️", () => {
    const input = "1 1\\0 0 N\\XY";
    const errorString = "Vehicle instruction is invalid";
    //Act & Assert
    expect(() => {
      execute(input);
    }).toThrow(errorString);
  });
});

describe("test Mars Rover out-of-plateau boundry coordinates 🔎🔎🔎", () => {
  it("test to prevent a rover from being placed on an out of north-side boundary location on a 1x1 grid 🔎", () => {
    const input = "1 1\\2 1 N\\MM";
    const errorString = "Cannot land outside of the plateau";
    //Act & Assert
    expect(() => {
      execute(input);
    }).toThrow(errorString);
  });
  it("ttest to prevent a rover from being placed on an out of south-side boundary location on a 1x1 grid 🔎", () => {
    const input = "1 1\\1 -1 N\\MM";
    const errorString = "Cannot land outside of the plateau";
    //Act & Assert
    expect(() => {
      execute(input);
    }).toThrow(errorString);
  });
  it("test to prevent a rover from being placed on an out of west-side boundary location on a 1x1 grid 🔎", () => {
    const input = "1 1\\-1 1 N\\MM";
    const errorString = "Cannot land outside of the plateau";
    //Act & Assert
    expect(() => {
      execute(input);
    }).toThrow(errorString);
  });
  it("test to prevent a rover from being placed on an out of east-side boundary location on a 1x1 grid 🔎", () => {
    const input = "1 1\\0 2 N\\MM";
    const errorString = "Cannot land outside of the plateau";
    //Act & Assert
    expect(() => {
      execute(input);
    }).toThrow(errorString);
  });
});

describe("test Mars Rover wall clashes 💥💥💥", () => {
  it("test to prevent a rover clashing the north-side wall on a 1x1 grid 💥", () => {
    const input = "1 1\\0 0 N\\MM";
    const errorString = "Reached the edge of the plateau";
    //Act & Assert
    expect(() => {
      execute(input);
    }).toThrow(errorString);
  });
  it("test to prevent a rover clashing the south-side wall on a 1x1 grid 💥", () => {
    const input = "0 0 N\\RRM";
    const errorString = "Reached the edge of the plateau";
    //Act & Assert
    expect(() => {
      execute(input);
    }).toThrow(errorString);
  });
  it("test to prevent a rover clashing the west-side wall on a 1x1 grid 💥", () => {
    const input = "0 0 N\\LM";
    const errorString = "Reached the edge of the plateau";
    //Act & Assert
    expect(() => {
      execute(input);
    }).toThrow(errorString);
  });
  it("test to prevent a rover clashing the east-side wall on a 1x1 grid 💥", () => {
    const input = "0 0 N\\RMM";
    const errorString = "Reached the edge of the plateau";
    //Act & Assert
    expect(() => {
      execute(input);
    }).toThrow(errorString);
  });
});

describe("test Mars Rover navigation works on a variety of grid sizes", () => {
  it("test navigation for a rover on 5x5 grid", () => {
    const input = "5 5\\1 2 N\\LMLMLMLMM";
    const expectedResult = "1 3 N";
    //Act
    const result = execute(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  it("test navigation for a rover on 5x5 grid", () => {
    const input = "3 3 E\\MMRMMRMRRM";
    const expectedResult = "5 1 E";
    //Act
    const result = execute(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  it("test navigation for a rover on 5x5 grid", () => {
    const input = "1 5 W\\MLMMLMMMRM";
    const expectedResult = "3 2 S";
    //Act
    const result = execute(input);
    //Assert
    expect(result).toBe(expectedResult);
  }); 
  it("test navigation for a rover on 5x5 grid", () => {
    const input = "2 3 S\\MMMRMM";
    const expectedResult = "0 0 W";
    //Act
    const result = execute(input);
    //Assert
    expect(result).toBe(expectedResult);
  });   
});

describe("test Mars Rover navigation on a rectangle 4x2 grid ◼︎◼︎", () => {
  it("test navigation for a rover on a 4x2 grid", () => {
    const input = "4 2\\2 1 E\\MMLMLMLMMRMM";
    const expectedResult = "1 0 W";
    //Act
    const result = execute(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  it("test navigation for a rover on a 4x2 grid", () => {
    const input = "3 0 S\\LMLMLMMRM";
    const expectedResult = "2 2 N";
    //Act
    const result = execute(input);
    //Assert
    expect(result).toBe(expectedResult);
  });

  it("test navigation for a rover on a 4x2 grid", () => {
    const input = "4 2 W\\MMMMLMLMRMR";
    const expectedResult = "1 0 W";
    //Act
    const result = execute(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
  it("test navigation for a rover on a 4x2 grid", () => {
    const input = "3 1 N\\MRMRMMRMMMMRMRMR";
    const expectedResult = "1 1 S";
    //Act
    const result = execute(input);
    //Assert
    expect(result).toBe(expectedResult);
  });
});
