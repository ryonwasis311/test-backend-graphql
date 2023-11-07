const jobQueue = require('./queue');

const addJobToQueue = async (data) =>{
    const job = await jobQueue.add(data);
    console.log(`Job ${job.id} added to the queue`);
};

addJobToQueue({ message: 'Helloe world' } );

