const {
	REDIS_HOST,
	REDIS_PORT,
	REDIS_PASSWORD,
	myservice_REQUESTS_QUEUE_NAME,
	myservice_REQUESTS_QUEUE_CONCURRENCY,
	myservice_RESULTS_QUEUE_NAME,
	myservice_RESULTS_QUEUE_ATTEMPTS,
} = process.env;

const config = {
	redis: {
		host: REDIS_HOST,
		port: REDIS_PORT || 6379,
		password: REDIS_PASSWORD,
	},
	requestsQueue: {
		name: myservice_REQUESTS_QUEUE_NAME || 'myservice-requests',
		concurrency: +myservice_REQUESTS_QUEUE_CONCURRENCY || 10,
	},
	resultsQueue: {
		name: myservice_RESULTS_QUEUE_NAME || 'myservice-results',
		attempts: +myservice_RESULTS_QUEUE_ATTEMPTS || 3,
	},
};

module.exports = config;