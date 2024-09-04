import { Inject, Injectable } from '@nestjs/common';
import { VerifyPasswordDto } from './dto/verify-password.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { OkResponse } from '../../utils/ok.response';
import { Repository } from 'typeorm';
import { Password } from './entities/password.entity';
import { compareSync, genSaltSync, hashSync } from 'bcrypt';
import { PasswordError } from './password.error';

@Injectable()
export class PasswordService {
  constructor(
    @Inject('PASSWORD_REPOSITORY')
    private passwordRepository: Repository<Password>,
  ) {}

  async verify(verifyPasswordDto: VerifyPasswordDto): Promise<OkResponse> {
    const password = await this.passwordRepository.findOneBy({
      uuid: verifyPasswordDto.uuid,
    });

    if (
      password === null ||
      !compareSync(verifyPasswordDto.password, password.password)
    ) {
      throw new PasswordError();
    }

    return { status: 'OK' };
  }

  async update(updatePasswordDto: UpdatePasswordDto): Promise<OkResponse> {
    await this.passwordRepository.save({
      uuid: updatePasswordDto.uuid,
      password: hashSync(updatePasswordDto.password, genSaltSync(12)),
    });

    return { status: 'OK' };
  }
}
