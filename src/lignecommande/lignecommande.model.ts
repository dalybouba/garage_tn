import { Schema, Document } from 'mongoose';
import { Article } from 'src/article/model/article.model';


export interface LigneCommande extends Document {
  article: Article;
  qte_com: number;
}

export const LigneCommandeSchema = new Schema({
  article: { type: Schema.Types.ObjectId, ref: 'Article', required: true },
  qte_com: { type: Number, required: true },
});
