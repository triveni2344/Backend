const mongoose = require("mongoose");


const todoSchema = mongoose.Schema({
    "title": {
        type: String,
        required: true
    },
    "dis": {
        type: String,
        required: true
    },
    "endDate": {
        type: String,
        required: true
    },
    "isPrimary": {
        type: Boolean,
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("todo",todoSchema);