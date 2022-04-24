import { ApiProperty } from '@nestjs/swagger';

export class LoginUsuarioDto {
  @ApiProperty()
  nombre: string;
  @ApiProperty()
  password: string;
}
