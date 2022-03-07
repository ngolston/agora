const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 200,
    },
    authorUsername: {
      type: String,
      required: true,
    },
<<<<<<< HEAD
=======
    communityId: {
      type: String,
      required: true,
    },
>>>>>>> ff52511289db8cb6b1ba0af658f92292b8991f74
    reactions: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

commentSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Comments = model("Comments", commentSchema);

module.exports = Comments;
