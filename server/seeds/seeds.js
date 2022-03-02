const db = require('../config/connection');
const { Post, Community, User } = require('../models');
const postData = require('./postData.json');
const user = require('./userData.json');
const community = require('./communityData.json');

db.once('open', async () => {
    await Post.deleteMany({});
    const post = await Post.insertMany(postData);
    console.log('Posts seeded!');

    await User.deleteMany({});
    const user = await User.insertMany(userData);
    console.log('Users seeded!');

    await Community.deleteMany({});
    const community = await Community.insertMany(communityData);
    console.log('Communities seeded!');

    process.exit(0);
});