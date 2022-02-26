const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
      id: {
        type: Number
      },
    username: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        validate: true
    },
    password: {
        type: String,
        validate: true
    },
    bio: {
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 100
    },
    profilePic: {
        url: []
    },
    posts: {
        type: Array,
        minlength: 1
    },
    comments: {
        type: Array,
        minlength: 1
    }
    
userSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const User = model('User', userSchema);

module.exports = User;