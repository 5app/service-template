const {INTERNAL_ERROR} = require('./index');

class ServiceError extends Error {
	constructor({code = INTERNAL_ERROR, message = 'Internal error'}) {
		super(message);
		this.code = code;
	}
}

module.exports = ServiceError;