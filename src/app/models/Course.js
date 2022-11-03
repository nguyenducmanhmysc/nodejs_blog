
// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const { Schema } = mongoose;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String, default:'no-description' },
    image: { type: String, default:'no-image' },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, required: true },
    level: { type: String },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Courses', Course);   
// module.exports = mongoose.model('table name', Course);