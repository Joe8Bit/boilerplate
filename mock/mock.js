'use strict';

// https://github.com/xetorthio/shmock

var shmock = require('shmock'),
	port = 8100,
	mock = shmock(port);

mock.get('/hello-world').persist().reply(200, require('./mock_data/hello-world'));
