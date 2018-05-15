const cluster = require('cluster');

//Is the file being executed in the master mode
if(cluster.isMaster){
	//casuse index.js to be executed *again* but in the slave/child mode
	cluster.fork();
}
else {
	//I'm a child and going to act like a server and do nothing else
	const express = require('express');
	const app = express();

	function doWork(duration) {
		const start = Date.now();
		while(Date.now() - start < duration) {
			
		}	
	}

	app.get('/', (req, res) => {
		doWork(5000);
		res.send('hi there')
	});

	app.listen(3000);
}

