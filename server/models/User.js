const { Schema, model } = require('mongoose');
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");

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
        },
    hashed_password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 100
    },
    profilePic: {
        type:String
    },
    posts: {
        type: Array,
        minlength: 0
    },
    comments: {
        type: Array,
        minlength: 0
    }
});

// virtual field
userSchema
  .virtual("password")
  .set(function (password) {
    // create temporary variable called _password
    //this._password = password;
    // generate a timestamp
    this.salt = uuidv4();
    // encryptPassword()
    this.hashed_password = this.encryptPassword(password);
  })
  // .get(function () {
  //   return this._password;
  // });

// methods
userSchema.methods = {
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

userSchema.virtual('reactionCount').get(function() {
    return this.posts.reduce((a,b) => a+b,0);
  });

const User = model('User', userSchema);

module.exports = User;