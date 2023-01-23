#!/usr/bin/env node
import chalk from 'chalk';
import unhandled from ('cli-handle-unhandled');
//const welcome = import("cli-welcome");
//const checkNode = require('cli-check-node');

const log = console.log;

unhandled();

// log(welcome({
// 	title: `pkgJSON.name`,
// 	description: `pkgJSON.description`,
// 	bgColor: `#FADC00`,
// 	color: `#000000`,
// 	bold: true,
// 	clear: true,
// 	version: `pkgJSON.version`,
// }));


log(`

${chalk.blue(`sandeep xeal`)}

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

GitHub : "https://github.com/sandeep-pulapaka"
   NPM : "https://www.npmjs.com/~sandeep7177"

Date :	20/01/2023
`);

