require("dotenv").config();

import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(helmet());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`Server has started on port ${process.env.PORT}`);
});