const db = require('../config/connection');
const { Post } = require('../models');

const post = require('./postData.json');

// db.once('open', async () => {
//   await post.deleteMany({});

//   const technologies = await Tech.insertMany(postData);

//   console.log('Posts seeded!');
//   process.exit(0);
// });