const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 80
    },
    text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 400
    },
    authorUsername: {
      type: String,
      required: true
    },
    authorId: {
        type: Number,
        required: true
      },
    communityId: {
        type: Number,
        required: true
      },
    comments: {
        type: Array,
        required: false
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

postSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

const Post = model('Post', postSchema);

module.exports = Post;