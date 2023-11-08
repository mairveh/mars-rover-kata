# mars-rover-kata

## Problem:
Help Mars Rovers navigate the Plateau so they can use their special cameras 📷 and robot arms 🌏🦾 to collect samples back to Planet Earth. Create a program which implements the rules for the Mars Rover.

## Rules and Assumptions:
1. Plateau is assumed to be a square or rectangle for the purpose of this task.
2. The Plateau is divided into a grid. A Rover’s position is represented by x and y co-ordinates and the letters N, S, W, E to represent North, South, West, East (the four cardinal compass points) respectively, i.e. 0 0 N means the Rover is at the bottom-left corner facing in the North direction. 
3. To move a Rover around the Plateau, a string of letters is sent to a Rover as below:
    - L: Spins the Rover 90 degrees Left without moving from the current coordinate point
    - R: Spins the Rover 90 degrees Right without moving from the current coordinate point
    - M: Moves the Rover forward by one grid point, maintaining the same heading/orientation
4. The first line inputted into the program represents the upper-right coordinates of the Plateau, i.e. 5 5 means that this Plateau has maximum (x, y) co-ordinates of (5, 5). The lower-left coordinate isassumed to be (0, 0).
5. Each rover receives two lines of input as shown below:
    - The Rover’s position is represented by two integers representing the X and Y coordinates and a letter representing where the Rover is facing (its orientation), i.e. 1 2 N
    - A string of letters representing the instructions to move the Rover around the Plateau, i.e. LMLMLMLMM
6. For each Rover, the output represents its final position (final coordinates and where it is facing), i.e. 1 3 N

## How to run the application:
1. The application uses node package manager(npm).It can be install via [npm Docs website](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. The application uses variaous libraries. Use the command below to install dependencies
    - npm i
3. The application receives the input via unit tests. Use the command below to run the tests
    - npm test tests/rover.test.js

## Key features of the solution and some approaches:
1. The solution benefits from typescript type guards for input validation.
2. Test-Driven Development (TDD) approach is used to test-drive the solution as it's built.
3. Production-quality code is produced covering below aspects:
- [x]well designed. can scale further for different vehicles and pletaus due to 
    - separation of UI Elements and Backend code
    - folder structure
    - generic naming convention for variables and files, i.e. vehicle vs rover
- [x]clean 
- [x]has good unit test coverage including edge case scenarios with type guarding
3. The code is readable with clear comments.
4. The code split into a scalable folder/file structure to help with scaling it further, see Future thoughts below.

## Future thoughts:
- [] Receive input via console to make it more dynamic and user friendly 🙆🏻‍♀️
- [] Prevents rovers from colliding with each other which can be expensive 🫰💰
