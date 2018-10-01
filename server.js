import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.get('/', (req, res) => {
	res.send("hello express");
})

server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, () => {
	console.log('listen on ', config.port);
});