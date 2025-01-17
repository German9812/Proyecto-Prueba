import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'token_secreto',
      passReqToCallback: true, // Habilita el uso del objeto "req" en el método "validate"
    });
  }

  // Método de validación modificado para incluir "req"
  async validate(req: any, payload: any) {
    // Puedes usar "req" si necesitas datos adicionales del encabezado o del cuerpo
    console.log('Request Headers:', req.headers); // Ejemplo: muestra los encabezados de la solicitud
    return { userId: payload.sub, username: payload.username };
  }
}
