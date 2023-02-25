const express = require("express");
const dotenv = require("dotenv");
const mainRoutes = require("../src/routes");

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(mainRoutes);
app.listen(process.env.PORT, () => {
  console.log("server running");
});
