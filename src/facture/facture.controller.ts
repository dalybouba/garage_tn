import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FactureService } from './facture.service';
import { Facture } from './facture.model';

@Controller('factures')
export class FactureController {
  constructor(private readonly factureService: FactureService) {}

  @Post()
  async create(@Body() facture: Facture) {
    return this.factureService.create(facture);
  }

  @Get()
  async findAll() {
    return this.factureService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.factureService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() facture: Facture) {
    return this.factureService.update(id, facture);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.factureService.delete(id);
  }
}
