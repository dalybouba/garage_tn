import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from './model/article.model';

@Injectable()
export class ArticleService {
  constructor(@InjectModel('Article') private readonly articleModel: Model<Article>) {}

  async create(article: Article): Promise<Article> {
    const newArticle = new this.articleModel(article);
    return newArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().populate('marque').populate('categorie').exec();
  }

  async findById(id: string): Promise<Article> {
    return this.articleModel.findById(id).populate('marque').populate('categorie').exec();
  }

  async findByName(name: string): Promise<Article[]> {
    return this.articleModel.find({ des_art: new RegExp(name, 'i') }).populate('marque').populate('categorie').exec();
  }

  async findByCategorie(cat_id: string): Promise<Article[]> {
    return this.articleModel.find({ categorie: cat_id }).populate('marque').populate('categorie').exec();
  }

  async findByMarque(marq_id: string): Promise<Article[]> {
    return this.articleModel.find({ marque: marq_id }).populate('marque').populate('categorie').exec();
  }

  async update(id: string, article: Article): Promise<Article> {
    return this.articleModel.findByIdAndUpdate(id, article, { new: true }).exec();
  }

  async delete(id: string): Promise<Article> {
    return this.articleModel.findByIdAndDelete(id).exec();
  }
}
