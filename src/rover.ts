let plateau: PlateauGrid = {
  x: -1,
  y: -1,
  initialised: false,
};

let vehicle: Rover = {
  x: 0,
  y: 0,
  orientation: "",
};

function initialisePlateau(plateauDimensions: string) {
  const [xAxisLength, yAxisLength] = plateauDimensions.split(" ")
  plateau = {
    x: parseInt(xAxisLength),
    y: parseInt(yAxisLength),
    initialised: true
  };
}

function initialiseVehicle(vehiclePositionAndOrientation: string): Rover {
  const [positionX, positionY, vehicleOrientation] = vehiclePositionAndOrientation.split(" ")
  //initialise the position of the vehicle
  vehicle = {
    x: parseInt(positionX),
    y: parseInt(positionY),
    orientation: vehicleOrientation
  };
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
  if (!isInstruction(instruction)) {
    throw new Error("Instruction is invalid");
  }

  //THE NAVIGATION LOGIC GOES IN HERE
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