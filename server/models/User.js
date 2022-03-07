const { Schema, model } = require("mongoose");
<<<<<<< HEAD
const Post = require("./Post")


=======
>>>>>>> ff52511289db8cb6b1ba0af658f92292b8991f74
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 30,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      trim: true,
      minlength: 1,
      maxlength: 100,
    },
    profilePic: {
      type: String,
    },
    posts: [Post.schema]}
  //   comments: {
  //     type: Array,
  //     minlength: 1,
  //   },
  // },
  // { collection: "user-data" }
);

// userSchema.virtual("reactionCount").get(function () {
//   return this.posts.reduce((a, b) => a + b, 0);
// });

const User = model("User", userSchema);

module.exports = User;
