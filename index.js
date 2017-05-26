'use strict'
const exec = require('child_process').exec
const fs = require('fs')
const path = require('path')



function getDirectories(srcpath, options){
	return new Promise((resolve, reject) => {
		fs.readdir(srcpath, (err, files) => {
			const arr = []
			for(let i = files.length; i--;){
				const file = files[i]
				if(fs.lstatSync(path.join(srcpath, file)).isDirectory() && (!options.prefix || files[i].indexOf(options.prefix) === 0)){
					arr.push(file)
				}
			}
			resolve(arr)
		})
	})
}

function zipDirectories(dirs){
	return new Promise((resolve, reject) => {
		const promises = []
		for(let i = dirs.length; i--;){
			promises.push(zipDirectory(dirs[i]))
		}
		Promise.all(promises)
			.then(resolve)
			.catch(reject)
	})
}

function zipDirectory(dir){
	return new Promise((resolve, reject) => {
		let name = dir.split('/')
		for(let i = name.length; i--;){
			if(name[i]){
				name = name[i]
				break
			}
		}
		exec(`cd ${dir} && zip -r ../${name} .`, (err, stdout, stderr) => {
			console.log(`Zipped ${name}`)
			if(err) return reject(err)
			if(stdout) console.log(stdout)
			if(stderr) console.log(stderr)
			resolve()
		})
	})
}

module.exports = options => {
	getDirectories(process.cwd(), options)
		.then(zipDirectories)
		.then(() => console.log('Done!'))
		.catch(console.error)
}
