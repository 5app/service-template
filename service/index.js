const logger = require('@5app/logger');
const queues = require('./queues');
const {ServiceError, INVALID_REQUEST} = require('./errors');

// Application entrypoint: process jobs on the requests' queue
function start() {
	queues.requests.process(async job => {
		const {xxx} = job.data; // TODO: replace with your expected job data

		try {
			if (!xxx) {
				throw new ServiceError({code: INVALID_REQUEST, message: 'Missing property xxx'});
			}

			// TODO: process the request and return a response to on the results queue
			const details = {};

			await queues.results.add({
				...job.data,
				success: true,
				details,
			});
		}
		catch (error) {
			await queues.results.add({ // This will fail if Bull or Redis are not working, in which case the whole service will be unhealthy
				...job.data,
				success: false,
				error,
			});
		}
	});

	logger.info(`myservice started processing jobs on the queue ${queues.requests.name}`);
}

function stop() {
	return queues.close();
}

module.exports = {
	start,
	stop,
};