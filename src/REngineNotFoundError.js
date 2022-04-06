'use strict'

/** @class */
class REngineNotFoundError extends Error {
	/**
	 * @param {string} path
	 */
	constructor(path) {
		super(`R Engine not found. See www.r-project.org. (path: ${path})`)
	}
}

module.exports = REngineNotFoundError