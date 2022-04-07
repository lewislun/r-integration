'use strict'

const BaseRIntegrationError = require('./base-r-integration-error')

/** @class */
class REngineNotFoundError extends BaseRIntegrationError {
	/**
	 * @param {string} path
	 */
	constructor(path) {
		super(`R Engine not found. See www.r-project.org. (path: ${path})`)
	}
}

module.exports = REngineNotFoundError