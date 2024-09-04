import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PasswordService } from './password.service';
import { VerifyPasswordDto } from './dto/verify-password.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Controller()
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @MessagePattern('verifyPassword')
  verify(@Payload() createPasswordDto: VerifyPasswordDto) {
    return this.passwordService.verify(createPasswordDto);
  }

  @MessagePattern('updatePassword')
  update(@Payload() createPasswordDto: UpdatePasswordDto) {
    return this.passwordService.update(createPasswordDto);
  }
}
