const logger = require('@5app/logger');
const service = require('./service');
const health = require('./health');

process.once('SIGTERM', () => {
	try {
		service.stop();
		process.exit(1); // eslint-disable-line no-process-exit
	}
	catch (error) {
		logger.error('Bull shutdown error', error);
	}
});

process.on('uncaughtException', error => {
	logger.error('Uncaught exception', error);
	process.exit(1);
});

service.start();
health.listen();