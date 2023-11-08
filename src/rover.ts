let plateau: PlateauGrid = {
  x: -1,
  y: -1,
};

let vehicle: Rover = {
  x: 0,
  y: 0,
  orientation: "",
};

function initialisePlateau(plateauDimensions: string) {
  console.log(`start plateau initialisation with input: ${plateauDimensions}`)

  const [xAxisLength, yAxisLength] = plateauDimensions.split(" ")
  plateau = {
    x: parseInt(xAxisLength),
    y: parseInt(yAxisLength),
  };

  console.log(`complete plateau initialisation with input: ${plateau.x} ${plateau.y}`)

}

function isOrientation(input: string): input is Orientation {
  return ["N", "E", "S", "W"].includes(input);
}

function initialiseVehicle(vehiclePositionAndOrientation: string): Rover {

  console.log(`start vehicle initialisation with input: ${vehiclePositionAndOrientation}`)

  if(!vehiclePositionAndOrientation) {
    throw new Error("Vehicle position or orientation is invalid");
  }

  const [positionX, positionY, vehicleOrientation] = vehiclePositionAndOrientation.split(" ")

  if(!positionX || parseInt(positionX)<0 || parseInt(positionX)>plateau.x) {
    throw new Error("Vehicle position is incorrect on the x-axis");
  }

  if(!positionY || parseInt(positionY)<0 || parseInt(positionY)>plateau.y) {
    throw new Error("Vehicle position is incorrect on the y-axis");
  }

  if(!isOrientation(vehicleOrientation)) {
    throw new Error("Vehicle orientation is invalid");
  }

  //initialise the position of the vehicle
  vehicle = {
    x: parseInt(positionX),
    y: parseInt(positionY),
    orientation: vehicleOrientation
  };

  console.log(`complete vehicle initialisation with input: ${vehicle.x} ${vehicle.y} ${vehicle.orientation}`)

  return vehicle;
}

function executeInstructions(instructions: string): string {
  const instructionArray = instructions.split("");
  //console.log(`instructions: ${instructionArray}`)
  instructionArray.forEach((i) => executeOneInstruction(i));
  const vehicleState = `${vehicle.x.toString()} ${vehicle.y.toString()} ${vehicle.orientation}`
  //console.log(`vehicleState: ${vehicleState}`)

  return vehicleState;
}

function isInstruction(input: string): input is Instruction {
  //console.log(`instruction: ${input}`);
  return ["L", "R", "M"].includes(input);
}

function executeOneInstruction(instruction: string): void {
  if (instruction && !isInstruction(instruction)) {
    throw new Error("Instruction is invalid");
  }

  //THE NAVIGATION LOGIC GOES IN HERE
  switch(vehicle.orientation) {
    case 'N':
      switch (instruction) {
        case 'L':
          vehicle.orientation = 'W';
          break;
        case 'M':
          (vehicle.y<plateau.y)?vehicle.y++:new Error("Reached the north end side of the plateau")
          break;
        case 'R':
          vehicle.orientation = 'E';
          break;
      }
      break;
    case 'S':
      switch (instruction) {
        case 'L':
          vehicle.orientation = 'E';
          break;
        case 'M':
          (vehicle.y>0)?vehicle.y--:new Error("Reached the south end side of the plateau");
          break;
        case 'R':
          vehicle.orientation = 'W';
          break;
      }
      break;
    case 'W':
      switch (instruction) {
        case 'L':
          vehicle.orientation = 'S';
          break;
        case 'M':
          (vehicle.x>0)?vehicle.x--:new Error("Reached the west end side of the plateau");
          break;
        case 'R':
          vehicle.orientation = 'N';
          break;
      }
      break;
    case 'E':
      switch (instruction) {
        case 'L':
          vehicle.orientation = 'N';
          break;
        case 'M':
          (vehicle.x<plateau.x)?vehicle.x++:new Error("Reached the east end side of the plateau");
          break;
        case 'R':
          vehicle.orientation = 'S';
          break;
      }
      break;
  }
}

function execute(input: string): string {
  if (input === undefined || input === null || input.trim() === "") {
    throw new Error("Input is invalid");
  }
  const inputArray = input.split("\n");
  //console.log(`inputArray: ${inputArray}`);
  let finalPosition = "";
  switch (inputArray.length) {
    case 3:
      //first vehicle on a new plateau
      initialisePlateau(inputArray[0]);
      initialiseVehicle(inputArray[1]);
      finalPosition = executeInstructions(inputArray[2]);
      break;
    case 2:
      //another vehicle on the same plateau
      initialiseVehicle(inputArray[0]);
      finalPosition = executeInstructions(inputArray[1]);
      break;
  }

  return finalPosition;
}

module.exports = execute;