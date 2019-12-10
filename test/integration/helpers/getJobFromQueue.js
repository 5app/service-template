function getWaitingJob(queueObject) {
	return new Promise(async resolve => { // eslint-disable-line no-async-promise-executor
		const [job] = await queueObject.getWaiting();

		if (job) {
			resolve(job);
		}
		else {
			queueObject.once('waiting', async jobId => {
				const job = await queueObject.getJob(jobId);
				resolve(job);
			});
		}
	});
}

async function getJobFromQueue(queueObject) {
	const job = await getWaitingJob(queueObject);
	await job.remove();
	return job;
}

module.exports = getJobFromQueue;