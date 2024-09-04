import { IsString, IsUUID } from 'class-validator';

export class VerifyPasswordDto {
  @IsUUID()
  uuid: string;

  @IsString()
  password: string;
}
