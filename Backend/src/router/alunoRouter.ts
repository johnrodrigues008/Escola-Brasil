import { Router } from "express";
import { criarAluno } from "../controllers/AlunoController";
import { AlunoModel } from "../models/alunosModel";
import { v4 } from "uuid";
import { AlunoMiddleware } from "../middlewares/alunosMiddleware";

const router = Router();

// GET
router.get('/alunos', async (req, res) =>{

      await AlunoModel.create({
        idAluno: v4(),
        nome: "Matheus Luan",
        matricula: "1234",
        data_nascimento: new Date(),
        idSala: "4e6e2d6f-dae4-4677-bb4a-410632552414",
      });

      return res.send('Rota de alunos ativa!');
});

router.post("/aluno", AlunoMiddleware, criarAluno);

export { router };
