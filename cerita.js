const fs = require('fs')
const path = require('path')
var fileName = fs.readdirSync(__dirname + '/cerita/')

var cerita = function () {
	var cerita = {}
	for (var i in fileName) {

		isi = fs.readFileSync(__dirname + '/cerita/' + fileName[i], 'utf8')
		title = path.basename(fileName[i], '.txt')
		cerita[i] = {
			judul: title,
			isi: isi
		}
	}
	return cerita
}

module.exports = cerita