import { Sequelize } from "sequelize";

export class Models {

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
