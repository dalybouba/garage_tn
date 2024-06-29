import { Schema, Document } from 'mongoose';
import { ServiceTechnique } from 'src/service-technique/service-technique.model';
import { User } from 'src/user/user.schema';

export interface RendezVous extends Document {
  id_rend: number;
  date_rend: Date;
  heure_debut: Date;
  heure_fin: Date;
  utilisateur: User;
  services: ServiceTechnique[];
}

export const RendezVousSchema = new Schema({
  id_rend: { type: Number, required: true },
  date_rend: { type: Date, required: true },
  heure_debut: { type: Date, required: true },
  heure_fin: { type: Date, required: true },
  utilisateur: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  services: [{ type: Schema.Types.ObjectId, ref: 'ServiceTechnique', required: true }],
});
