const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
  {
      id: {
        type: Number
      },
    text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 200
    },
    contentType: {
        type: Dropdown
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
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