const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/jwt-auth", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Failed connected to database");
  });
