const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({

    name:{
        type: String,
        required: true,
    },
    mobileNumber:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: false,
    },
    subjects: {
        type: String,
        required: true,
    }
})

const Teacher = mongoose.model('Teacher',teacherSchema);
module.exports = Teacher;