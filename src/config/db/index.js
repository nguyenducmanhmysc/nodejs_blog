
const mongoose = require('mongoose');

async function connect() {
    try {
        // localhost = 127.0.0.1
        await mongoose.connect("mongodb://127.0.0.1:27017/f8_education_dev");
        console.log("Connec database is succeded");
    } catch (error) {
        console.log("Connect database is failed");
    }
}
module.exports = { connect };