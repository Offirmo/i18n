#!/bin/sh
':' //# http://sambal.org/?p=1014 ; exec /usr/bin/env node "$0" "$@"

console.log(`* Infinitely watching and building module for testing...`)

// Install the unhandledRejection listeners
// https://github.com/sindresorhus/loud-rejection
require('loud-rejection/register')

const _ = require('lodash')
const fs = require('fs-extra')
const tsc = require('node-typescript-compiler')
const log_promise = require('./common').log_promise

//const package = { json: require('../package.json') }
const tsconfig = { json: require('../tsconfig.json') }

log_promise(
	Promise.resolve()
	.then(() => {
		// Clean up the output directory
		fs.emptyDirSync('test/unit/src')
	}),
	'file cleanup'
)
.then(transpile_typescript_for_tests)

function transpile_typescript_for_tests() {
	const files = tsc.compile(Object.assign({}, tsconfig.json.compilerOptions, {
			'module': 'CommonJS',
			'outDir': 'test/unit/src',
			'watch': true,
		}
	))

	log_promise(files, 'typescript -> ES6@CommonJs')

	return files
}
