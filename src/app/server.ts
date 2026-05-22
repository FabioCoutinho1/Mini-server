import express from "express";
import usersRouter from "../module/task/routers/users.route.js";
import cors, { type CorsOptions } from "cors";

const app = express();

const corsOptions: CorsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(usersRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando no porta ${PORT}`);
});
