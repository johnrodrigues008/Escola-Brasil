import { Model, DataType, Sequelize, DataTypes } from "sequelize";
import { Models } from "../database/models";

export class AlunoModel extends Model {
  public idAluno!: string;
  public nome!: string;
  public matricula!: string;
  public data_nascimento!: Date;
  public idSala: string;

  static initialization(db: Sequelize) {
    this.init(
      {
        idAluno: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        matricula: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        data_nascimento: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        idSala: {
          type: DataTypes.UUID,
          allowNull: false,
        },
      },
      {
        sequelize: db,
        modelName: "Alunos",
      }
    );
  }

  static association(models: Models) {
    this.belongsTo(models.salas, {
      as: "salas",
      foreignKey: {
        field: "idSala", // Valor do id
        name: "idSala", // Nome da coluna no banco
      },
    });
  }
}
