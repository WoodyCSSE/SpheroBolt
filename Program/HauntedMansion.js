/*
Programmer: Landon Harter
Team Member: Woody
Date: 1/26/22
Program: Haunted Mansion Maze
*/

async function startProgram() {
    await toBlueLight();
}

async function toBlueLight() {
    await roll(0, 100, 1.4);
	setMainLed({ r: 0, g: 0, b: 255 });
}