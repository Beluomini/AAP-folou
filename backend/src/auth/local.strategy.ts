import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'password'
    });
  }

  async validate(username: string, password: string): Promise<any> {
    const petshop = await this.authService.validatePetShop(username  , password);
    if(!petshop) {
      const client = await this.authService.validateClient(username  , password);
      if (!client) {
        throw new UnauthorizedException();
      }
      return client;
    }
    if (!petshop) {
      throw new UnauthorizedException();
    }
    return petshop;
  }
}