#!/usr/bin/env node
//const clearConsole = require(`clear-any-console`);

const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");

// Clears the console.
//clearConsole();

welcome({
	title: pkgJSON.name,
//	tagLine: `xeal`,
	description : pkgJSON.description,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: pkgJSON.version
});

console.log(`
sandeep pulapaka

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Date :	19/01/2023
`);
