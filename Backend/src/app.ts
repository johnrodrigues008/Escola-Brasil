import express from "express";
import cors from "cors";
import { router } from "./router/alunoRouter";
import { salas } from "./router/salaRouter";

const app = express();

app.use(cors());

app.use(express.json());

app.use(router, salas);

export { app };