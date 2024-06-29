import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LivraisonService } from './livraison.service';
import { Livraison } from './livraison.model';

@Controller('livraisons')
export class LivraisonController {
  constructor(private readonly livraisonService: LivraisonService) {}

  @Post()
  async create(@Body() livraison: Livraison) {
    return this.livraisonService.create(livraison);
  }

  @Get()
  async findAll() {
    return this.livraisonService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.livraisonService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() livraison: Livraison) {
    return this.livraisonService.update(id, livraison);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.livraisonService.delete(id);
  }
}
