import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
  constructor(
    private readonly utilisateurService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(mail_user: string, pass: string): Promise<any> {
    const user = await this.utilisateurService.validateUser(mail_user, pass);
    if (user) {
      const { mdp_user, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { mail_user: user.mail_user, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: any) {
    return this.utilisateurService.create(user);
  }
}
