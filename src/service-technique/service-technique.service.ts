import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceTechnique } from './service-technique.model';

@Injectable()
export class ServiceTechniqueService {
  constructor(@InjectModel('ServiceTechnique') private readonly serviceTechniqueModel: Model<ServiceTechnique>) {}

  async create(serviceTechnique: ServiceTechnique): Promise<ServiceTechnique> {
    const newServiceTechnique = new this.serviceTechniqueModel(serviceTechnique);
    return newServiceTechnique.save();
  }

  async findAll(): Promise<ServiceTechnique[]> {
    return this.serviceTechniqueModel.find().populate('utilisateur').exec();
  }

  async findById(id: string): Promise<ServiceTechnique> {
    return this.serviceTechniqueModel.findById(id).populate('utilisateur').exec();
  }

  async update(id: string, serviceTechnique: ServiceTechnique): Promise<ServiceTechnique> {
    return this.serviceTechniqueModel.findByIdAndUpdate(id, serviceTechnique, { new: true }).exec();
  }

  async delete(id: string): Promise<ServiceTechnique> {
    return this.serviceTechniqueModel.findByIdAndDelete(id).exec();
  }
}
