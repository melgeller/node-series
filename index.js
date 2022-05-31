const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const logger = require("morgan");
const cloudinary = require('cloudinary').v2

dotenv.config();

const {connect} = require ("./src/utils/database");
connect()

const charactersRouter = require("./src/api/routes/characters.routes");
const seriesRouter = require("./src/api/routes/series.routes");
const userRouter = require("./src/api/routes/users.routes");

const PORT = process.env.PORT || 5000;

const server = express();

const JWT_SECRET = process.env.JWT_SECRET

server.use(logger("dev"))

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  server.use(cors({
    origin: "*",
    credentials: true
}))

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.set("secretKey", JWT_SECRET)

server.use("/series", seriesRouter);
server.use("/characters", charactersRouter);
server.use("/users", userRouter);


server.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
})