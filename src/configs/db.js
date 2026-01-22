const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/todo_pro");
        console.log(mongoose.connection.name);

    } catch (error) {
        console.error(error);
    }
}

module.exports = connectToDB