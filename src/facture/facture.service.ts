import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Facture } from './facture.model';

@Injectable()
export class FactureService {
  constructor(@InjectModel('Facture') private readonly factureModel: Model<Facture>) {}

  async create(facture: Facture): Promise<Facture> {
    const newFacture = new this.factureModel(facture);
    return newFacture.save();
  }

  async findAll(): Promise<Facture[]> {
    return this.factureModel.find().populate('commande').exec();
  }

  async findById(id: string): Promise<Facture> {
    return this.factureModel.findById(id).populate('commande').exec();
  }

  async update(id: string, facture: Facture): Promise<Facture> {
    return this.factureModel.findByIdAndUpdate(id, facture, { new: true }).exec();
  }

  async delete(id: string): Promise<Facture> {
    return this.factureModel.findByIdAndDelete(id).exec();
  }
}
