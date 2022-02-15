/*
Programmer: Landon Harter
Team Member: Woody
Date: 1/26/22
Program: Haunted Mansion Maze
*/

async function startProgram() {

	await scrollMatrixText("START", { r: 152, g: 0, b: 255 }, 10, true);

	await toBlueLight();
	await toMusic1();
	await toRedLight();
	await toMusic2();
	await toGreenLight();
	await toMusic3();
	await toPurpleLight();
	await end();
}

async function toBlueLight() {
	await roll(0, 50, 3.2);
	setMainLed({ r: 0, g: 0, b: 255 }); // Set LED to blue

}

async function toMusic1() {
	await delay(1); // Give time to stop
	await roll((getHeading() + 90), 50, 2.3); // Roll at 90 degrees for 1 second
	await Sound.Animal.Chicken.play(true); // Play our sound
}

async function toRedLight() {
	// Navigate to next check point
	await delay(1); // Give time to stop
	await roll((getHeading() + 90), 50, 1.5);
	await delay(1); // Give time to stop
	await roll((getHeading() + 45), 50, 1.3);
	await delay(1); // Give time to stop
	await roll((getHeading() - 90), 50, 0.95);
	await delay(1); // Give time to stop
	setMainLed({ r: 255, g: 0, b: 0 }); // Set LED to red
}

async function toMusic2() {
	await roll((getHeading() - 90), 50, 1.7); // Roll at -90 degress for 0.7 seconds
	await Sound.Water.BoatAngry.play(true); // Play our second sound of choice
	await delay(1); // Give time to stop
}

async function toGreenLight() {
	await roll(getHeading() + 90, 50, 1); // Roll 90 degress for 1 second
	await delay(1); // Give time to stop
	await roll(getHeading() + 45, 50, 0.7); // Roll 45 degrees for 0.7 seconds
	await delay(1); // Give time to stop
	await roll(getHeading() - 90, 50, 0.65); // Roll -90 degrees for 0.65 seconds
	setMainLed({ r: 0, g: 255, b: 0 }); // Set LED to green
	await delay(1); // Give time
	await roll(getHeading(), 50, 0.6); // Roll for 0.6 seconds
	await delay(1);
}

async function toMusic3() {
	await roll(getHeading() - 90, 50, 1.1); // Roll -90 degrees for 1.1 seconds
	await delay(1); // Give time to stop
	await roll(getHeading() - 45, 50, 1.2); // Roll at -45 seconds for 1.2 seconds
	await delay(1); // Give time to stop
	await Sound.Mechanical.Accelerate.play(true); // Play sound
	await delay(1); // Give time to stop

}

async function toPurpleLight() {
	await roll(getHeading() + 45, 50, 1.5); // Roll at 45 degrees for 1.5 seconds
	setMainLed({ r: 152, g: 0, b: 255 }); // SEt LED to purple

}

async function end() {
	await scrollMatrixText("FINISHED!", { r: 152, g: 0, b: 255 }, 10, true); // Done!
}
=======
  
}

