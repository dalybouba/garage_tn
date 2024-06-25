import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './model/article.model';


@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() article: Article) {
    return this.articleService.create(article);
  }

  @Get()
  async findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.articleService.findById(id);
  }

  @Get('search/name/:name')
  async findByName(@Param('name') name: string) {
    return this.articleService.findByName(name);
  }

  @Get('search/categorie/:cat_id')
  async findByCategorie(@Param('cat_id') cat_id: string) {
    return this.articleService.findByCategorie(cat_id);
  }

  @Get('search/marque/:marq_id')
  async findByMarque(@Param('marq_id') marq_id: string) {
    return this.articleService.findByMarque(marq_id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() article: Article) {
    return this.articleService.update(id, article);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.articleService.delete(id);
  }
}
