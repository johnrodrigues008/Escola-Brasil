import { Model, DataType, Sequelize, DataTypes } from "sequelize";
import { Models } from "../database/models";

export class SalaModel extends Model{
      public idSala!: string;
      public nome!: string;
      public numero!: string;
      public ano!: string;

      static initialization(db: Sequelize){
            this.init(
              {
                idSala: {
                  type: DataTypes.UUID,
                  defaultValue: DataTypes.UUIDV4,
                  allowNull: false,
                  primaryKey: true,
                },
                nome: {
                  type: DataTypes.STRING,
                  allowNull: false,
                },
                numero: {
                  type: DataTypes.STRING,
                  allowNull: false,
                },
                ano: {
                  type: DataTypes.STRING,
                  allowNull: false,
                },
              },
              {
                sequelize: db,
                modelName: "Salas",
              }
            );

      }
      
      static association(models: Models){
            this.belongsTo(models.alunos, {
                  as: 'alunos',
                  foreignKey: {
                        field: 'idSala', // Valor do id
                        name: 'idSala' // Nome da coluna no banco 
                  }
            });
      }
}