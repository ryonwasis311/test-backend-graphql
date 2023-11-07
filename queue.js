const Queue = require('bull');

const jobQueue = new Queue('my-job-queue');
module.exports = jobQueue;