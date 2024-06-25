import { Schema, Document } from 'mongoose';

export interface Marque extends Document {
  marq_id: number;
  marq_lib: string;
}

export const MarqueSchema = new Schema({
  marq_id: { type: Number, required: true },
  marq_lib: { type: String, required: true },
});
