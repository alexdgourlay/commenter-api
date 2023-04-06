module.exports = {
	// Resets all the mocks usage data, but keeps their behaviour.
	clearMocks: true,
	// Needed for Typescript compatability.
	preset: 'ts-jest',
	// It's a Node app!
	testEnvironment: 'node',
};
