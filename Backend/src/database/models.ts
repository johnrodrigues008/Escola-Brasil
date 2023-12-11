import { Sequelize } from "sequelize";
import { SalaModel } from "../models/salasModel";
import { AlunoModel } from "../models/alunosModel";

export class Models {

      public salas: typeof SalaModel = SalaModel;
      public alunos: typeof AlunoModel = AlunoModel;

      // mapear os modelos
      constructor(db: Sequelize) {
            Object.keys(this).forEach((pModel: string) => {
                  if (
                        this[pModel] !== undefined &&
                        this[pModel].initialization !== undefined
                  ) {
                        this[pModel].initialization(db);
                  }
            });

            Object.keys(this).forEach((pModel: string) => {
                  if (
                        this[pModel] !== undefined &&
                        this[pModel].association !== undefined
                  ) {
                        this[pModel].association(this);
                  }
            });
      }
}
