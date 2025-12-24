const express = require("express");
const connectToDB = require("./configs/db");
const taskRoute = require("./routes/tasksRoutes");

const app = express();

app.use(express.json());
app.use("/api/task", taskRoute);

app.get("/", (req, res) => {
  res.send("Server is Started");
});

app.listen(7000, async () => {
  console.log("Server is working");

  // connect to DB
  connectToDB();
});



// title- String
// dec - String
// endDate - Date
// isPrimary - bool
// createdAt
// updatedAt