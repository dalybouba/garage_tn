import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { RendezVousService } from './rendez-vous.service';
import { RendezVous } from './rendez-vous.model';
import { Role, RoleGuard } from 'src/role/role.guard';
import { UserRole } from 'src/user/user.schema';

@Controller('rendez-vous')
export class RendezVousController {
  constructor(private readonly rendezVousService: RendezVousService) {}

  @UseGuards(RoleGuard)
  @Role(UserRole.CLIENT)
  @Post()
  async create(@Body() rendezVous: RendezVous) {
    const isAvailable = await this.rendezVousService.checkAvailability(
      rendezVous.date_rend,
      rendezVous.heure_debut,
      rendezVous.heure_fin,
    );

    if (!isAvailable) {
      throw new Error('Ce créneau horaire est déjà réservé.');
    }

    return this.rendezVousService.create(rendezVous);
  }

  @Get()
  async findAll() {
    return this.rendezVousService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.rendezVousService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() rendezVous: RendezVous) {
    const isAvailable = await this.rendezVousService.checkAvailability(
      rendezVous.date_rend,
      rendezVous.heure_debut,
      rendezVous.heure_fin,
    );

    if (!isAvailable) {
      throw new Error('Ce créneau horaire est déjà réservé.');
    }

    return this.rendezVousService.update(id, rendezVous);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.rendezVousService.delete(id);
  }

  @Get('availability/:date/:heureDebut/:heureFin')
  async checkAvailability(
    @Param('date') date: string,
    @Param('heureDebut') heureDebut: string,
    @Param('heureFin') heureFin: string,
  ) {
    const isAvailable = await this.rendezVousService.checkAvailability(
      new Date(date),
      new Date(heureDebut),
      new Date(heureFin),
    );

    return { available: isAvailable };
  }

  @Get('next-30-days/unavailable')
  async getUnavailableAppointmentsNext30Days() {
    return this.rendezVousService.getUnavailableAppointmentsNext30Days();
  }

  @Get('next-30-days/available')
  async getAvailableAppointmentsNext30Days() {
    return this.rendezVousService.getAvailableAppointmentsNext30Days();
  }
}
