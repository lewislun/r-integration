'use strict'

const {
	BaseRIntegrationError,
	REngineNotFoundError,
	RScriptError,
} = require('./errors')

const {
	executeRCommand,
	executeRCommandAsync,
	executeRScript,
	callMethod,
	callMethodAsync,
	callStandardMethod,
} = require('./r')

module.exports = {
	// errors
	BaseRIntegrationError,
	REngineNotFoundError,
	RScriptError,

	// r.js
	executeRCommand,
	executeRCommandAsync,
	executeRScript,
	callMethod,
	callMethodAsync,
	callStandardMethod,
}