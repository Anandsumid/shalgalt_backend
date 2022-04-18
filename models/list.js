const mongoose = require("mongoose");

const Schema = mongoose.Schema
const listSchema = new Schema({
    listname: {
        type: String,
        required: true
    },
    uploaddate: {
        type: Date,
        required: true
    },
    done: {
        type: String
    },
    notdone: {
        type: Boolean
    },
    finishdate:{
        type: Date
    }
})
const List = mongoose.model('lists', listSchema)
module.exports = List