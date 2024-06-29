import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paiement } from './paiement.model';

@Injectable()
export class PaiementService {
  constructor(@InjectModel('Paiement') private readonly paiementModel: Model<Paiement>) {}

  async create(paiement: Paiement): Promise<Paiement> {
    const newPaiement = new this.paiementModel(paiement);
    return newPaiement.save();
  }

  async findAll(): Promise<Paiement[]> {
    return this.paiementModel.find().populate('facture').populate('utilisateur').exec();
  }

  async findById(id: string): Promise<Paiement> {
    return this.paiementModel.findById(id).populate('facture').populate('utilisateur').exec();
  }

  async update(id: string, paiement: Paiement): Promise<Paiement> {
    return this.paiementModel.findByIdAndUpdate(id, paiement, { new: true }).exec();
  }

  async delete(id: string): Promise<Paiement> {
    return this.paiementModel.findByIdAndDelete(id).exec();
  }
}
