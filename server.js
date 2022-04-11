import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";
const DB_CONNECTION_STRING = 'mongodb+srv://klaidaazizi:p4ssw0rd@cluster0.1ooqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(DB_CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());

// helloController(app);
// userController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);