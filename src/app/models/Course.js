
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const Course = new Schema({
    name: { type: 'string', default: 'no-name' },
    description: { type: 'string', default:'no-description' },
    image: { type: 'string', default:'no-image' },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Courses', Course);
// module.exports = mongoose.model('table name', Course);