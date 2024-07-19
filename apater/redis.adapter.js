const redis = require('redis');
const { createAdapter } = require('@socket.io/redis-adapter');

const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const pubClient = redis.createClient({
    host: REDIS_HOST,
    port: REDIS_PORT,
});

const subClient = pubClient.duplicate();

module.exports = { pubClient, subClient, createAdapter };