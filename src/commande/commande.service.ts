import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Commande } from './commande.model';

@Injectable()
export class CommandeService {
  constructor(@InjectModel('Commande') private readonly commandeModel: Model<Commande>) {}

  async create(commande: Commande): Promise<Commande> {
    const newCommande = new this.commandeModel(commande);
    return newCommande.save();
  }

  async findAll(): Promise<Commande[]> {
    return this.commandeModel.find().populate('user').populate('lignes_commande').exec();
  }

  async findById(id: string): Promise<Commande> {
    return this.commandeModel.findById(id).populate('user').populate('lignes_commande').exec();
  }

  async update(id: string, commande: Commande): Promise<Commande> {
    return this.commandeModel.findByIdAndUpdate(id, commande, { new: true }).exec();
  }

  async delete(id: string): Promise<Commande> {
    return this.commandeModel.findByIdAndDelete(id).exec();
  }
}
