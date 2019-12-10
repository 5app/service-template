const {healthCheckServer, bullStats} = require('@5app/health-check-helpers');
const {requests} = require('./service/queues');

function listen() {
	healthCheckServer({
		dependencies: [ // TODO: Add your dependencies here
			{
				name: 'bull',
				check: () => bullStats(requests),
			},
		],
	});
}

module.exports = {
	listen,
};