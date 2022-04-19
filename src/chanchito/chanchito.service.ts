import { Injectable } from '@nestjs/common';
import { CreateChanchitoDto } from './dto/create-chanchito.dto';
import { UpdateChanchitoDto } from './dto/update-chanchito.dto';

@Injectable()
export class ChanchitoService {
  create(createChanchitoDto: CreateChanchitoDto) {
    return 'This action adds a new chanchito';
  }

  findAll() {
    return `This action returns all chanchito`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chanchito`;
  }

  update(id: number, updateChanchitoDto: UpdateChanchitoDto) {
    return `This action updates a #${id} chanchito`;
  }

  remove(id: number) {
    return `This action removes a #${id} chanchito`;
  }
}
