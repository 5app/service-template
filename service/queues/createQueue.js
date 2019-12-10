'use strict';

const Bull = require('bull');
const logger = require('@5app/logger');
const {redis} = require('../../config');

const redisSettings = {
	port: redis.port,
	host: redis.host,
	options: {},
};

if (redis.password) {
	redisSettings.auth = redis.password;
}

function createQueue(queueName) {
	const queue = new Bull(queueName, {redis: redisSettings});

	queue.on('error', error => {
		logger.error(`Error on Bull queue ${queueName}`, error);
	});

	return queue;
}

module.exports = createQueue;
