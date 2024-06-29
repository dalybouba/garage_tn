import { Schema, Document } from 'mongoose';

export interface Livraison extends Document {
  liv_id: number;
  liv_date: Date;
  liv_descrp: string;
}

export const LivraisonSchema = new Schema({
  liv_id: { type: Number, required: true },
  liv_date: { type: Date, required: true },
  liv_descrp: { type: String, required: true },
});
