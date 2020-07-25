const express = require("express");
const userRoutes = require("./router/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(userRoutes);

app.listen(port, () => {
  console.log("server is up on " + port);
});
