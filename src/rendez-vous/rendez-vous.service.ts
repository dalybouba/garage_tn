import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RendezVous } from './rendez-vous.model';

@Injectable()
export class RendezVousService {
  constructor(@InjectModel('RendezVous') private readonly rendezVousModel: Model<RendezVous>) {}

  async create(rendezVous: RendezVous): Promise<RendezVous> {
    const newRendezVous = new this.rendezVousModel(rendezVous);
    return newRendezVous.save();
  }

  async findAll(): Promise<RendezVous[]> {
    return this.rendezVousModel.find().populate('utilisateur').populate('services').exec();
  }

  async findById(id: string): Promise<RendezVous> {
    return this.rendezVousModel.findById(id).populate('utilisateur').populate('services').exec();
  }

  async update(id: string, rendezVous: RendezVous): Promise<RendezVous> {
    return this.rendezVousModel.findByIdAndUpdate(id, rendezVous, { new: true }).exec();
  }

  async delete(id: string): Promise<RendezVous> {
    return this.rendezVousModel.findByIdAndDelete(id).exec();
  }

  async checkAvailability(date: Date, heureDebut: Date, heureFin: Date): Promise<boolean> {
    const rendezVous = await this.rendezVousModel.find({
      date_rend: date,
      $or: [
        { heure_debut: { $lt: heureFin, $gte: heureDebut } },
        { heure_fin: { $lte: heureFin, $gt: heureDebut } },
      ],
    }).exec();

    return rendezVous.length === 0;
  }

  async getUnavailableAppointmentsNext30Days(): Promise<RendezVous[]> {
    const now = new Date();
    const next30Days = new Date();
    next30Days.setDate(now.getDate() + 30);

    return this.rendezVousModel.find({
      date_rend: { $gte: now, $lte: next30Days },
    }).populate('utilisateur').populate('services').exec();
  }

  async getAvailableAppointmentsNext30Days(): Promise<{ date: Date; availableSlots: string[] }[]> {
    const now = new Date();
    const next30Days = new Date();
    next30Days.setDate(now.getDate() + 30);

    const allSlots = this.generateTimeSlots();
    const unavailableAppointments = await this.getUnavailableAppointmentsNext30Days();

    const availableSlotsPerDay = [];

    for (let day = new Date(now); day <= next30Days; day.setDate(day.getDate() + 1)) {
      const currentDay = new Date(day);
      const unavailableSlotsForDay = this.getUnavailableSlotsForDay(unavailableAppointments, currentDay);
      const availableSlots = allSlots.filter(slot => !unavailableSlotsForDay.includes(slot));
      
      availableSlotsPerDay.push({
        date: new Date(currentDay),
        availableSlots: availableSlots,
      });
    }

    return availableSlotsPerDay;
  }

  private generateTimeSlots(): string[] {
    const slots = [];
    const startHour = 8;
    const endHour = 17;
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${hour}:00`, `${hour}:30`);
    }
    return slots;
  }

  private getUnavailableSlotsForDay(appointments: RendezVous[], day: Date): string[] {
    const slots = [];
    for (const appointment of appointments) {
      if (appointment.date_rend.toDateString() === day.toDateString()) {
        const startHour = appointment.heure_debut.getHours();
        const startMinute = appointment.heure_debut.getMinutes();
        const endHour = appointment.heure_fin.getHours();
        const endMinute = appointment.heure_fin.getMinutes();
        slots.push(`${startHour}:${startMinute < 10 ? '0' : ''}${startMinute}`, `${endHour}:${endMinute < 10 ? '0' : ''}${endMinute}`);
      }
    }
    return slots;
  }
}
