const fs = require('fs');
const cheerio = require('cheerio');
const filePath = 'title.txt';
const url = process.argv[2];

module.exports.saveTagToFile = function(data,tagToSave){
	let $=cheerio.load(data);
	let title =`${$(tagToSave).text()}\n`;
	fs.appendFile(filePath, title , (err) =>{
	if (err) throw err;
	console.log(`Website: ${url}\nTitle: ${title}`);
	});
};