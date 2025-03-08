import "reflect-metadata";  
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("users") 
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  role!: string;
}
