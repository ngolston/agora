const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const CommunitySchema = new Schema(
    {
        id: {
            type: Number
        },
        title: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 40,
            trim: true
        },
        description: {
            type: String,
            required: false,
            minlength: 1,
            maxlength: 100,
            trim: true
        },
        image: {
            type: Image,
            required: false,
            url: []
        },
        posts: {
            type: Array,
            required: false,

        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    });

const Community = model('Community', CommunitySchema);

module.exports = Community;
