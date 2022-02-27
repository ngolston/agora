const db = require('../config/connection');
const { Post } = require('../models');

const post = require('./postData.json');

// db.once('open', async () => {
//   await Tech.deleteMany({});

//   const technologies = await Tech.insertMany(techData);

//   console.log('Technologies seeded!');
//   process.exit(0);
// });