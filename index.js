const express = require("express");
const app = express();
const apiRoute = require("./routes/api");
const dotenv = require("dotenv").config();
const port = 3006;
const connection = require("./database");
// const cors = require('./middleware/cors')


app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoute);
app.all("*", (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Can't find ${req.originalUrl} on this website`,
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
