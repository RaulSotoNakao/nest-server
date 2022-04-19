import { Module } from '@nestjs/common';
import { ChanchitoService } from './chanchito.service';
import { ChanchitoController } from './chanchito.controller';

@Module({
  controllers: [ChanchitoController],
  providers: [ChanchitoService]
})
export class ChanchitoModule {}
