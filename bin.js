#!/usr/bin/env node
const zipAll = require('./index')
const meow = require('meow')
const cli = meow(`
	Usage
	  $ zip-all
	Options
	  -p, --prefix   Zips all directories that start with...
`, {
	alias: {
		p: 'prefix'
	}
})
zipAll(cli.flags)
