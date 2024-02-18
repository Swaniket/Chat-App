const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRouter = require("./routes/userRoute");
const errorHandler = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 8080;
const app = express();

/* CONFIG */
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* DB Connection */
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully conneced to Mongo");
  })
  .catch((error) => {
    console.log(`Unable to connect to Mongo ${error}`);
  });

/* Routes */
app.use("/api/users", userRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
