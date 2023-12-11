import { Request, Response } from "express";
import { createAluno, getAlunos } from "../services/alunosService";
import { AlunosInterface } from "../interfaces/alunosInterface";

export async function ListarAluno(_, res: Response) {
  try {
    const salas = await getAlunos();

    if (salas.length == 0) {
      return res.json("Não temos nenhum aluno!");
    } else {
      return res.json(salas);
    }
  } catch (error) {
    console.log(`error: ${error}`);
  }
}

export async function criarAluno(req: Request, res: Response): Promise<Response<AlunosInterface>>{
      try {
            const { nome, matricula, idSala } = req.body;

            const aluno: AlunosInterface = {
                  nome: nome,
                  matricula: matricula,
                  idSala: idSala,
            }

            const novoAluno = await createAluno(aluno);

            return res.json(novoAluno);
            
      } catch (error) {
           return res.json("Deu errooooo!!!");''
      }
}