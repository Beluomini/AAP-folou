import { Module } from '@nestjs/common';
import { PetShopsModule } from 'src/pet-shops/pet-shops.module';
import { AuthService } from './auth.service';

@Module({
  imports: [PetShopsModule],
  providers: [AuthService]
})
export class AuthModule {}
