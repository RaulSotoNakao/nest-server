import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty()
  @IsNotEmpty()
  nombre: string;
  @ApiProperty()
  @IsNotEmpty()
  password: string;
  @ApiProperty()
  @IsNotEmpty()
  contacto: string;
  @ApiProperty()
  @IsNotEmpty()
  direccion: string;
  @ApiProperty()
  @IsNotEmpty()
  email: string;
}
