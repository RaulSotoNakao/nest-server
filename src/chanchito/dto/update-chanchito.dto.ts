import { PartialType } from '@nestjs/mapped-types';
import { CreateChanchitoDto } from './create-chanchito.dto';
import { OmitType } from '@nestjs/swagger';
export class UpdateChanchitoDto extends OmitType(
  CreateChanchitoDto,
  [] as const,
) {}
