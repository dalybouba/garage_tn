import { Injectable, OnModuleInit } from '@nestjs/common';
import * as schedule from 'node-schedule';
import { MailService } from 'src/mail-service/mail-service.service';
import { RendezVousService } from 'src/rendez-vous/rendez-vous.service';


@Injectable()
export class NotificationService implements OnModuleInit {
  constructor(
    private readonly rendezVousService: RendezVousService,
    private readonly mailService: MailService,
  ) {}

  onModuleInit() {
    this.scheduleNotifications();
  }

  private scheduleNotifications() {
    // Schedule a daily job at midnight
    schedule.scheduleJob('0 0 * * *', () => {
      this.sendNotifications();
    });
  }

  private async sendNotifications() {
    const now = new Date();
    const nextDay = new Date(now);
    nextDay.setDate(now.getDate() + 1);

    const appointments = await this.rendezVousService.findAll();

    appointments.forEach(appointment => {
      const appointmentDate = new Date(appointment.date_rend);

      // Check for 24-hour notification
      if (this.isWithin24Hours(appointmentDate, now)) {
        this.mailService.sendMail(
          appointment.utilisateur.mail_user,
          'Reminder: Appointment in 24 hours',
          `Dear ${appointment.utilisateur.nom_user}, you have an appointment in 24 hours.`,
        );
      }

      // Check for 1-hour notification
      if (this.isWithin1Hour(appointmentDate, now)) {
        this.mailService.sendMail(
          appointment.utilisateur.mail_user,
          'Reminder: Appointment in 1 hour',
          `Dear ${appointment.utilisateur.nom_user}, you have an appointment in 1 hour.`,
        );
      }
    });
  }

  private isWithin24Hours(appointmentDate: Date, now: Date): boolean {
    const diffInMs = appointmentDate.getTime() - now.getTime();
    const diffInHours = diffInMs / (1000 * 60 * 60);
    return diffInHours >= 23 && diffInHours < 24;
  }

  private isWithin1Hour(appointmentDate: Date, now: Date): boolean {
    const diffInMs = appointmentDate.getTime() - now.getTime();
    const diffInHours = diffInMs / (1000 * 60 * 60);
    return diffInHours >= 0.5 && diffInHours < 1.5;
  }
}
