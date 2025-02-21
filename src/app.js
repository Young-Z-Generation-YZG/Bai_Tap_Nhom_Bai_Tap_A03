const env = require("dotenv");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDocs = require("swagger-jsdoc");
const path = require("path");
const express = require("express");

env.config();

const app = express();
const server = require("http").createServer(app);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// // config Swagger
const options = require("./configs/swagger.config");
const specs = swaggerJsDocs(options);
app.use("/swagger/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// config static file
app.use(express.static(path.join(__dirname, "public")));

// Init middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Init routes
const router = require("./routes");
app.use("/", router);


// Handle error
app.use((error, req, res, next) => {
const statusCode = error.status || 500;

    return res.status(statusCode).json({
        status: "error",
        code: statusCode,
        message: error.message || "Internal Server Error",
    });
});
  
  module.exports = server;