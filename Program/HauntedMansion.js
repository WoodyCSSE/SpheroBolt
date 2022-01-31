/*
Programmer: Landon Harter
Team Member: Woody
Date: 1/26/22
Program: Haunted Mansion Maze
*/

async function startProgram() {
    await toBlueLight();
	await toMusic1();
	await toRedLight();
	await toMusic2();
}

async function toBlueLight() {
    await roll(0, 100, 1.5);
	setMainLed({ r: 0, g: 0, b: 255 }); // Set LED to blue
	
}

async function toMusic1() {
	await delay (1); // Give time to stop
	await roll((getHeading()+90),100, 1); // Roll at 90 degrees for 1 second
	await Sound.Animal.Chicken.play(true); // Play our sound
}

async function toRedLight() {
	// Navigate to next check point
	await delay (1); // Give time to stop
	await roll((getHeading() + 90), 100, 0.7);
	await delay(1); // Give time to stop
	await roll((getHeading() + 45), 100, 0.6);
	await delay(1); // Give time to stop
	await roll((getHeading() - 90), 100, 0.4);
	await delay(1); // Give time to stop
	setMainLed({ r: 255, g: 0, b: 0 }); // Set LED to red
}

async function toMusic2() {
	await roll((getHeading() - 90), 100, 0.7); // Roll at -90 degress for 0.7 seconds
	await Sound.Water.BoatAngry.play(true); // Play our second sound of choice
	await delay(1); // Give time to stop
}