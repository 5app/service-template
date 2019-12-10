const config = require('../../config');
const createQueue = require('./createQueue');

const requests = createQueue(config.requestsQueue.name);
const results = createQueue(config.resultsQueue.name);

function close() {
	return Promise.all([
		requests.close(),
		results.close(),
	]);
}

module.exports = {
	requests,
	results,
	close,
};
