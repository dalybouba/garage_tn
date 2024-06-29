import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User, UserRole } from './user.schema';
import { CreateUserDto } from './create-user.dto';


@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly utilisateurModel: Model<User>) {}

  async create(utilisateur: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(utilisateur.mdp_user, salt);
    utilisateur.mdp_user = hash;
    const newUser = new this.utilisateurModel(utilisateur);
    return newUser.save();
  }

  async findOneByEmail(mail_user: string): Promise<User | undefined> {
    return this.utilisateurModel.findOne({ mail_user }).exec();
  }

  async validateUser(mail_user: string, password: string): Promise<User | null> {
    const user = await this.findOneByEmail(mail_user);
    if (user && await bcrypt.compare(password, user.mdp_user)) {
      return user;
    }
    return null;
  }

  async findAll(): Promise<User[]> {
    return this.utilisateurModel.find().exec();
  }
  
  async findByRole(role: UserRole): Promise<User[]> {
    return this.utilisateurModel.find({ role }).exec();
  }
}


