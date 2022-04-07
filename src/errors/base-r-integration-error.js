'use strict'

/** @class */
class BaseRIntegrationError extends Error {
	/**
	 * @param {string} message
	 */
	constructor(message) {
		super(message)
		this.name = this.constructor.name
	}
}

module.exports = BaseRIntegrationError