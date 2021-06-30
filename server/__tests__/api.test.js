const app = require('../app');
const request = require('supertest');

describe('API', () => {
	let api;

	beforeAll(() => {
		api = app.listen(6000, () => {
			console.log(`Server is listening on port 6000 for testing.`);
		});
	});

	test('responds to / with status 200', (done) => {
		request(api).get('/').expect(200, done);
	});

	afterAll((done) => {
		api.close(done);
	});
});
