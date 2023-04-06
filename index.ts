import {start} from './src/server';

start().then(() => {
	console.log('Running');
}).catch(err => {
	console.error(err);
});
