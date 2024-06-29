import { Schema, Document } from 'mongoose';
import { User } from 'src/user/user.schema';

export interface ServiceTechnique extends Document {
  id_service: number;
  libelle: string;
  description: string;
  date_debut: Date;
  date_fin: Date;
  utilisateur: User;
}

export const ServiceTechniqueSchema = new Schema({
  id_service: { type: Number, required: true },
  libelle: { type: String, required: true },
  description: { type: String, required: true },
  date_debut: { type: Date, required: true },
  date_fin: { type: Date },
  utilisateur: { type: Schema.Types.ObjectId, ref: 'user', required: true },
});
