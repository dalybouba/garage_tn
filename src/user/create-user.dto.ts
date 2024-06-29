import { UserRole } from "./user.schema";

export class CreateUserDto {
  readonly mail_user: string;
  readonly login_user: string;
  public mdp_user: string;
  readonly nom_user: string;
  readonly prenom_user: string;
  readonly tel_user: number;
  readonly cin_user: number;
  readonly img_user: string;
  readonly role: UserRole;
}
