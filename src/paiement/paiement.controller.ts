import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PaiementService } from './paiement.service';
import { Paiement } from './paiement.model';

@Controller('paiements')
export class PaiementController {
  constructor(private readonly paiementService: PaiementService) {}

  @Post()
  async create(@Body() paiement: Paiement) {
    return this.paiementService.create(paiement);
  }

  @Get()
  async findAll() {
    return this.paiementService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.paiementService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() paiement: Paiement) {
    return this.paiementService.update(id, paiement);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.paiementService.delete(id);
  }
}
