import { Schema, Document } from 'mongoose';
import { LigneCommande } from 'src/lignecommande/lignecommande.model';
import { User } from 'src/user/user.schema';


export interface Commande extends Document {
  utilisateur: User;
  date_com: Date;
  description_cmd: string;
  lignes_commande: LigneCommande[];
}

export const CommandeSchema = new Schema({
  utilisateur: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date_com: { type: Date, default: Date.now },
  description_cmd: { type: String, required: true },
  lignes_commande: [{ type: Schema.Types.ObjectId, ref: 'LigneCommande' }],
});
