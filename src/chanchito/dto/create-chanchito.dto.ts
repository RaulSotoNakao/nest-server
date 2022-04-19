import { ApiProperty } from '@nestjs/swagger';

export class CreateChanchitoDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  food: string;
  @ApiProperty()
  roles: [];
  @ApiProperty()
  isEating?: boolean = true;

  @ApiProperty({
    type: Number,
  })
  year: number;
}
