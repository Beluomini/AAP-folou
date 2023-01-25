import { Injectable } from '@nestjs/common';
import { PetShopsService } from 'src/pet-shops/pet-shops.service';

@Injectable()
export class AuthService {
  constructor(private petshopService: PetShopsService) {}

  async validatePetShop(email: string, password: string): Promise<any> {
    const petshop = await this.petshopService.findOneByEmail(email);
    if (petshop && petshop.password === password) {
      const { password, ...result } = petshop;
      return result;
    }
    return null;
  }
}
