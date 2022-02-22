require("dotenv").config({ path: "./env/.env" });
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const mongoose = require("mongoose");
const cors = require("cors");

// middlewares
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// mongodb setup
mongoose.connect(process.env.DB_URL);

console.log(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", async () => {
  console.log("DB connection success!");
});

// importing routers
const postUserDetailsRouter = require("./routers/postUser");
const getAllUsersDetailsRouter = require("./routers/getUsers");

// using the imported router
app.use("/postUser", postUserDetailsRouter);
app.use("/users", getAllUsersDetailsRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
