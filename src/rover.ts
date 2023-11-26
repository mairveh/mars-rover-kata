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
  if (!plateauDimensions)
    throw new Error(
      "Plateau cannot be initialised due to an error in the dimensions"
    );

  const [xAxisLength, yAxisLength] = plateauDimensions.split(" ");

  if (isNaN(parseInt(xAxisLength)) || isNaN(parseInt(yAxisLength)))
    throw new Error(
      "Plateau cannot be initialised due to an error in the dimensions"
    );

  //initialise the plateau with given dimensions
  plateau = {
    x: parseInt(xAxisLength),
    y: parseInt(yAxisLength),
  };

}

function isOrientation(input: string): input is Orientation {
  return ["N", "E", "S", "W"].includes(input);
}

function initialiseVehicle(vehiclePositionAndOrientation: string): Rover {
  if (!vehiclePositionAndOrientation) {
    throw new Error("Vehicle position or orientation is invalid");
  }

  const [positionX, positionY, vehicleOrientation] =
    vehiclePositionAndOrientation.split(" ");

    if (isNaN(parseInt(positionX)) || isNaN(parseInt(positionY)))
    throw new Error(
      "Vehicle coordinate(s) invalid"
    );

  if (
    !positionX ||
    parseInt(positionX) < 0 ||
    parseInt(positionX) > plateau.x
  ) {
    throw new Error("Cannot land outside of the plateau");
  }

  if (
    !positionY ||
    parseInt(positionY) < 0 ||
    parseInt(positionY) > plateau.y
  ) {
    throw new Error("Cannot land outside of the plateau");
  }

  if (!isOrientation(vehicleOrientation)) {
    throw new Error("Vehicle orientation is invalid " + vehicleOrientation);
  }

  //initialise the position of the vehicle
  vehicle = {
    x: parseInt(positionX),
    y: parseInt(positionY),
    orientation: vehicleOrientation,
  };

  return vehicle;
}

function executeInstructions(instructions: string): string {
  const instructionArray = instructions.split("");
  instructionArray.forEach((i) => executeOneInstruction(i));
  const vehicleState = `${vehicle.x.toString()} ${vehicle.y.toString()} ${
    vehicle.orientation
  }`;

  return vehicleState;
}

function isInstruction(input: string): input is Instruction {
  return ["L", "R", "M"].includes(input);
}

function executeOneInstruction(instruction: string): void {
  if (instruction && !isInstruction(instruction)) {
    throw new Error("Vehicle instruction is invalid");
  }

  //navigation logic is handled for each valid move otherwise a relevant error message is displayed
  switch (vehicle.orientation) {
    case "N":
      switch (instruction) {
        case "L":
          vehicle.orientation = "W";
          break;
        case "M":
          if (vehicle.y < plateau.y) {
            vehicle.y++;
          } else {
            throw new Error("Reached the edge of the plateau");
          }
          break;
        case "R":
          vehicle.orientation = "E";
          break;
        default:
          throw new Error("Vehicle instruction is invalid");
      }
      break;
    case "S":
      switch (instruction) {
        case "L":
          vehicle.orientation = "E";
          break;
        case "M":
          if (vehicle.y > 0) {
            vehicle.y--;
          } else {
            throw new Error("Reached the edge of the plateau");
          }
          break;
        case "R":
          vehicle.orientation = "W";
          break;
        default:
          throw new Error("Vehicle instruction is invalid");
      }
      break;
    case "W":
      switch (instruction) {
        case "L":
          vehicle.orientation = "S";
          break;
        case "M":
          if (vehicle.x > 0) {
            vehicle.x--;
          } else {
            throw new Error("Reached the edge of the plateau");
          }
          break;
        case "R":
          vehicle.orientation = "N";
          break;
        default:
          throw new Error("Vehicle instruction is invalid");
      }
      break;
    case "E":
      switch (instruction) {
        case "L":
          vehicle.orientation = "N";
          break;
        case "M":
          if (vehicle.x < plateau.x) {
            vehicle.x++;
          } else {
            throw new Error("Reached the edge of the plateau");
          }
          break;
        case "R":
          vehicle.orientation = "S";
          break;
        default:
          throw new Error("Vehicle instruction is invalid");
      }
      break;
  }
}

export function execute(input: string): string {
  if (input === undefined || input === null || input.trim() === "") {
    throw new Error("Input is invalid");
  }
  const inputArray = input.split("\n");
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