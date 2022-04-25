import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginUsuarioDto {
  @ApiProperty()
  @IsNotEmpty()
  nombre: string;
  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
