const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
require('dotenv').config();

mongoose
  .connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => console.log(err));
  
app.use(express.json())
app.use('/api/auth', authRoute);



app.listen(9000, () => {
  console.log("Backend Server is Running!");
});
