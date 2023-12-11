import { v4 } from "uuid";
import { AlunosInterface } from "../interfaces/alunosInterface";
import { AlunoModel } from "../models/alunosModel";

export async function getAlunos() {
      return await AlunoModel.findAll();
}

export async function createAluno(aluno: AlunosInterface): Promise<AlunosInterface> {
    return await AlunoModel.create({
      idAluno: v4(),
      nome: aluno.nome,
      matricula: aluno.matricula,
      data_nascimento: new Date(),
      idSala: aluno.idSala
    });
}
