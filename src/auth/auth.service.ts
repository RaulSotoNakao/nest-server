import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}
  validateUser(nombre: string, password: string): Promise<any> {
    return this.usuarioService.findUserByName(nombre).then((user) => {
      if (user && user.password === password) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    });
  }

  login(user: any) {
    const payload = { nombre: user.nombre, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
