
import { Entity, Column } from 'typeorm';
import { BaseModel } from './base.model';

@Entity()
export class UserModel extends BaseModel {

  @Column({
    unique: true
  })
  email: string;

  @Column()
  password: string;
  

  @Column()
  companyName: string;
}

