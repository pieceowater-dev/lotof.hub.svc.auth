import { IsStrongPassword, IsUUID } from 'class-validator';

export class UpdatePasswordDto {
  @IsUUID()
  uuid: string;

  @IsStrongPassword({
    minSymbols: 1,
    minNumbers: 1,
    minLength: 12,
    minUppercase: 1,
    minLowercase: 1,
  })
  password: string;
}
