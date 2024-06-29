import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ServiceTechniqueService } from './service-technique.service';
import { ServiceTechnique } from './service-technique.model';

@Controller('service-technique')
export class ServiceTechniqueController {
  constructor(private readonly serviceTechniqueService: ServiceTechniqueService) {}

  @Post()
  async create(@Body() serviceTechnique: ServiceTechnique) {
    return this.serviceTechniqueService.create(serviceTechnique);
  }

  @Get()
  async findAll() {
    return this.serviceTechniqueService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.serviceTechniqueService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() serviceTechnique: ServiceTechnique) {
    return this.serviceTechniqueService.update(id, serviceTechnique);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.serviceTechniqueService.delete(id);
  }
}
