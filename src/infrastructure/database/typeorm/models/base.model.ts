import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


export class BaseModel{
  @PrimaryGeneratedColumn('uuid') 
  id: string;
  
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
  
@UpdateDateColumn({
  type: 'timestamp',
  default: () => 'CURRENT_TIMESTAMP',
})
  updatedAt: Date;
}