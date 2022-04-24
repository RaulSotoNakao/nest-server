import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import {
  ApiResponse,
  ApiTags,
  ApiCreatedResponse,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('usuario')
@ApiBearerAuth()
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateUsuarioDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiParam({
    name: 'id',
    required: true,
    description:
      'either an integer for the project id or a string for the project name',
    schema: { oneOf: [{ type: 'string' }, { type: 'integer' }] },
  })
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
