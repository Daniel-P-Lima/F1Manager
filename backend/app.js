import express from "express";
import cors from "cors";
import pilotoRouters from "./Routes/pilotos.js"
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", pilotoRouters);
app.listen(8800);
