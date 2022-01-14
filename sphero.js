/*
 * Program: Basic Figure Eight
 * Programmer: Landon Harter
 * Date: 1/13/22
*/

const sphereTime = 2.75;
const delayTime = 0.2;
const motorStrength = 100;
const steadyForce = 0;

async function startProgram() {
	await figureEight();
}

async function figureEight() {
	await rawMotor(motorStrength, steadyForce, sphereTime);
	await delay(delayTime);
	await rawMotor(steadyForce, motorStrength, sphereTime);
}
