import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { Commande } from './commande.model';

@Controller('commandes')
export class CommandeController {
  constructor(private readonly commandeService: CommandeService) {}

  @Post()
  async create(@Body() commande: Commande) {
    return this.commandeService.create(commande);
  }

  @Get()
  async findAll() {
    return this.commandeService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.commandeService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() commande: Commande) {
    return this.commandeService.update(id, commande);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.commandeService.delete(id);
  }
}
