

const sinon = require('sinon');
const getJobFromQueue = require('./helpers/getJobFromQueue');
const service = require('../../service');
const queues = require('../../service/queues');

describe('MyFeature', () => {
	before(async () => {
		service.start();
	});

	after(async () => {
		await service.stop();
	});

	it('returns all the data of the job we added to the rquests queue', async () => {
		// 1. We prepare the data for the test
		const xxx = Date.now();

		// 2. We add a new job to the requests queue of the service
		queues.requests.add({
			xxx,
		});

		// 3. We get back the result
		const job = await getJobFromQueue(queues.results);

		// 4 Check that the payload is as expected
		sinon.assert.match(job.data, {
			success: true,
			xxx,
			details: {},
		});
	});
});
