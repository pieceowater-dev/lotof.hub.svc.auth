import { Module } from '@nestjs/common';
import { PasswordService } from './password.service';
import { PasswordController } from './password.controller';
import { passwordProvider } from './password.provider';

@Module({
  controllers: [PasswordController],
  providers: [...passwordProvider, PasswordService],
})
export class PasswordModule {}
