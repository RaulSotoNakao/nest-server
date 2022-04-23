import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChanchitoModule } from './chanchito/chanchito.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { TestModule } from './test/test.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'negocio',
      password: 'negocionails',
      database: 'negocio',
      autoLoadEntities: true,
      // entities: [UsuarioModule],
      // synchronize: true,
    }),
    ChanchitoModule,
    UsuarioModule,
    TestModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
