const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    userName: {
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
    hashed_password: {
        type: String,
        validate: true,
        required: true
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
        minlength: 0
    },
    comments: {
        type: Array,
        minlength: 1
    }
});
//may need {} around reaction count
userSchema.virtual('reactionCount').get(function() {
    return this.posts.reduce((a,b) => a+b.reactionCount,0);
  });

const User = model('User', userSchema);

module.exports = User;