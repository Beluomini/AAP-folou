import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PetShopsModule } from 'src/pet-shops/pet-shops.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [PetShopsModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
