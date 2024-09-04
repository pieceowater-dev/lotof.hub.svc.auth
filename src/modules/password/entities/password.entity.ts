import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Password {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  password: string;
}
