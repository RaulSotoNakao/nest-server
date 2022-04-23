import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: Number;
  @Column()
  nombre: string;
  @Column()
  password: string;
  @Column()
  contacto: string;
  @Column()
  direccion: string;
  @Column()
  email: string;
}
