import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Livraison } from './livraison.model';

@Injectable()
export class LivraisonService {
  constructor(@InjectModel('Livraison') private readonly livraisonModel: Model<Livraison>) {}

  async create(livraison: Livraison): Promise<Livraison> {
    const newLivraison = new this.livraisonModel(livraison);
    return newLivraison.save();
  }

  async findAll(): Promise<Livraison[]> {
    return this.livraisonModel.find().exec();
  }

  async findById(id: string): Promise<Livraison> {
    return this.livraisonModel.findById(id).exec();
  }

  async update(id: string, livraison: Livraison): Promise<Livraison> {
    return this.livraisonModel.findByIdAndUpdate(id, livraison, { new: true }).exec();
  }

  async delete(id: string): Promise<Livraison> {
    return this.livraisonModel.findByIdAndDelete(id).exec();
  }
}
