import { Schema, Document } from 'mongoose';

export enum UserRole {
  ADMIN = 'admin',
  CLIENT = 'client',
}

export const UserSchema = new Schema({
  mail_user: String,
  login_user: String,
  mdp_user: String,
  nom_user: String,
  prenom_user: String,
  tel_user: Number,
  cin_user: Number,
  img_user: String,
  role: {
    type: String,
    enum: UserRole,
    default: UserRole.CLIENT,
  },
});

export interface User extends Document {
  id_user: number;
  mail_user: string;
  login_user: string;
  mdp_user: string;
  nom_user: string;
  prenom_user: string;
  tel_user: number;
  cin_user: number;
  img_user: string;
  role: UserRole;
}
