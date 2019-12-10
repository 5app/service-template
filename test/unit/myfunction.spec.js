'use strict';

const assert = require('assert');

function functionToTest(...numbers) {
	return numbers.reduce((sum, number) => sum + number);
}

describe('MyFunction', () => {
	it('calculates the sum of all parameters', async () => {
		assert.strictEqual(functionToTest(1, 2, 3), 6);
	});
});
