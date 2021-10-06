const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, required: true },
        slug: { type: String, slug: 'name', unique: true },
        level: { type: String },
    },
    {
        timestamps: true,
    },
);

//Add plugin
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course);
