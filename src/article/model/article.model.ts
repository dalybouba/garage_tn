import { Schema, Document } from 'mongoose';
import { Marque } from './marque.model';
import { Categorie } from './categorie.model';


export interface Article extends Document {
  code_art: number;
  des_art: string;
  qte_stk: number;
  prix: number;
  tva: number;
  img_art: string;
  marque: Marque;
  categorie: Categorie;
}

export const ArticleSchema = new Schema({
  code_art: { type: Number, required: true },
  des_art: { type: String, required: true },
  qte_stk: { type: Number, required: true },
  prix: { type: Number, required: true },
  tva: { type: Number, required: true },
  img_art: { type: String },
  marque: { type: Schema.Types.ObjectId, ref: 'Marque' },
  categorie: { type: Schema.Types.ObjectId, ref: 'Categorie' },
});
