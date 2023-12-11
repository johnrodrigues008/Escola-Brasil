import { SalaModel } from "../models/salasModel";

export async function getSalas() {
      return await SalaModel.findAll();
}



