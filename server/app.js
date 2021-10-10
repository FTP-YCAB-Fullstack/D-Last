const express = require("express");
const app = express();
const mongoose = require("mongoose");
const route = require("./routes/index");
const cors = require("cors");
require("dotenv/config");
const PORT = process.env.SERVER_PORT;
const error = require("./middlewares/errorHandler");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(route);

// DB CONNECTION
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Database Connection Error!"));
db.once("open", () => {
  console.log("Database Connected!");
});

app.use(error);

app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}`);
});
