const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./routes/userRoutes");

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
const DB =
  "mongodb+srv://ndthaiut:Dh11kt03@node-complete.qxtzybs.mongodb.net/shop";

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/users", userRouter);

mongoose
  .connect(DB)
  .then((result) => {
    app.listen(3000);
    console.log("App running on server");
  })
  .catch((err) => {
    console.log(err);
  });
