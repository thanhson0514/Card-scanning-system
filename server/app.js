const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const user = require("./routers/router");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const PORT = 3000 || process.env.PORT;
dotenv.config();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api", user);

io.on("connection", function (socket) {
  console.log("Connect socket!");
  socket.on("disconnect", function () {
    console.log("Disconnect socket!");
  });
});

app.locals.io = io;

app.get("/", (req, res) => res.render("index"));

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Connecting server on port:", PORT);
    });
  })
  .catch(err => console.log(err));
