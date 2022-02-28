const { Post, User, Community, Comments } = require('../models');

const resolvers = {
  Query: {
    Post: async () => {
      return Post.findAll({});
    }
  }}

module.exports = resolvers