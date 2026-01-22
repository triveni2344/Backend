const express = require("express");
const cors = require("cors");
const connectToDB = require("./configs/db");

const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes')

const app = express();
app.use(cors())
app.use(express.json());
app.use("/api/todo", todoRoutes);
app.use("/api/user", userRoutes);


app.get("/", (req, res) => {
    res.status(200).json({ "message": "backend" });
})

app.listen(4000, () => {
    console.log("Server run");

    // connect to mongo
    connectToDB()
})


// CRUD - Create
// save()
// create()
// insertOne({})
// insertMany([])

// CRUD - Read
// find()
// findOne()
// findOneById()

// CRUD - Update
// findOneByIdAndUpdate()
// updateOne({})
// updateMany([])

// CRUD - Delete
// findOneByIdAndDelete()
// deleteOne()
// deleteMany()


