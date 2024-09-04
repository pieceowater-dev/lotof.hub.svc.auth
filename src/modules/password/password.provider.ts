import { DataSource } from 'typeorm';
import { Password } from './entities/password.entity';

export const passwordProvider = [
  {
    provide: 'PASSWORD_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Password),
    inject: ['DATA_SOURCE'],
  },
];
