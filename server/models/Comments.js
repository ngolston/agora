const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 200
    },
    contentType: {
        type: Dropdown
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

const Comments = model('Comments', commentSchema);

module.exports = Comments;