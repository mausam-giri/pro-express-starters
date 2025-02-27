const express = require("express");
const dotenv = require("dotenv");
const catchAsync = require("./helper/catchAsyncHandler");
const errorMiddleware = require("./helper/errorMiddleware");
const Reject = require("./helper/rejectHandler");
const Response = require("./helper/responseHandler");

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.get(
  "/",
  catchAsync((req, res, next) => {
    Response.success(res, "ss");
  })
);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
