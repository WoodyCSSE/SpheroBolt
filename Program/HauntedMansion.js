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
}

async function toBlueLight() {
    await roll(0, 100, 1.45);
	setMainLed({ r: 0, g: 0, b: 255 });
	
}

async function toMusic1() {
	await delay (1);
	await roll((getHeading()+90),100, 1);
	await Sound.Animal.Chicken.play(true);
}

async function toRedLight() {
	await delay (1);
	await roll((getHeading() + 90), 100, 0.7);
	await delay(1);
	await roll((getHeading() + 45), 100, 0.7);
	await delay(1);
	await roll((getHeading() - 90), 100, 0.4);
	await delay(1);
	setMainLed({ r: 255, g: 0, b: 0 }); 
}