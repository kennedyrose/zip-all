'use strict'
const exec = require('child_process').exec
const fs = require('fs')
const path = require('path')



function getDirectories (srcpath) {
	return fs.readdirSync(srcpath)
		.filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory())
}

function zipDir(dir){
	exec()
}
