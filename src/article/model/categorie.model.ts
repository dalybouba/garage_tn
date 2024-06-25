import { Schema, Document } from 'mongoose';

export interface Categorie extends Document {
  cat_id: number;
  cat_lib: string;
}

export const CategorieSchema = new Schema({
  cat_id: { type: Number, required: true },
  cat_lib: { type: String, required: true },
});
