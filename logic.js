const fs = require('fs');
const puppeteer = require('puppeteer');

var start = new Date();

async function loadPage() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://mensadigital.de/LOGINPLAN.ASPX?P=FO111&E=herz');
	// await page.screenshot({ path: 'mensa01.png' });
	let htmlSource = await page.evaluate(() => document.body.outerHTML);
	console.log(htmlSource);

	fs.writeFile('new.html', htmlSource, function(err) {
		if (err) {
			return console.log(err);
		}

		console.log('The file was saved!');

		var end = new Date() - start;
		console.info('Execution time: %dms', end);
	});
	await browser.close();
}

loadPage();
