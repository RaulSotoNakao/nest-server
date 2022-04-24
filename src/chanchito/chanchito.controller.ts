import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChanchitoService } from './chanchito.service';
import { CreateChanchitoDto } from './dto/create-chanchito.dto';
import { UpdateChanchitoDto } from './dto/update-chanchito.dto';
import {
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('chanchito')
@ApiBearerAuth()
@Controller('chanchito')
export class ChanchitoController {
  constructor(private readonly chanchitoService: ChanchitoService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateChanchitoDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createChanchitoDto: CreateChanchitoDto) {
    return this.chanchitoService.create(createChanchitoDto);
  }

  @Get()
  findAll() {
    return this.chanchitoService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description:
      'either an integer for the project id or a string for the project name',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  findOne(@Param('id') id: string) {
    return this.chanchitoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChanchitoDto: UpdateChanchitoDto,
  ) {
    return this.chanchitoService.update(+id, updateChanchitoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chanchitoService.remove(+id);
  }
}
