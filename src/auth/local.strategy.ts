import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'nombre' });
  }

  validate(nombre: string, password: string): Promise<any> {
    return this.authService.validateUser(nombre, password).then((user) => {
      if (!user) {
        // return 'oli'
        throw new UnauthorizedException();
      }
      return user;
    });
  }
}
