import { Schema, Document } from 'mongoose';
import { Commande } from 'src/commande/commande.model';


export interface Facture extends Document {
  id_fact: number;
  date_fact: Date;
  baseht: number;
  tva: number;
  remise: number;
  totalht: number;
  totalttc: number;
  commande: Commande;
}

export const FactureSchema = new Schema({
  id_fact: { type: Number, required: true },
  date_fact: { type: Date, required: true },
  baseht: { type: Number, required: true },
  tva: { type: Number, required: true },
  remise: { type: Number, required: true },
  totalht: { type: Number, required: true },
  totalttc: { type: Number, required: true },
  commande: { type: Schema.Types.ObjectId, ref: 'Commande', required: true },
});
