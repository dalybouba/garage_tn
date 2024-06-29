import { Schema, Document } from 'mongoose';
import { Facture } from 'src/facture/facture.model';
import { User } from 'src/user/user.schema';

export interface Paiement extends Document {
  id_paiement: number;
  date_paiement: Date;
  montant: number;
  methode: string;
  statut: string;
  facture: Facture;
  utilisateur: User;
}

export const PaiementSchema = new Schema({
  id_paiement: { type: Number, required: true },
  date_paiement: { type: Date, required: true },
  montant: { type: Number, required: true },
  methode: { type: String, required: true },
  statut: { type: String, required: true },
  facture: { type: Schema.Types.ObjectId, ref: 'Facture', required: true },
  utilisateur: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});
