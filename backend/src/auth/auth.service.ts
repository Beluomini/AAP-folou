import { Injectable } from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';
import { PetShopsService } from 'src/pet-shops/pet-shops.service';

@Injectable()
export class AuthService {
  constructor(
    private petshopService: PetShopsService,
    private clientService: ClientsService,
  ) {}

  async validatePetShop(email: string, password: string): Promise<any> {
    const petshop = await this.petshopService.findOneByEmail(email);
    if (petshop && petshop.password === password) {
      const { password, ...result } = petshop;
      return result;
    }
    return null;
  }

  async validateClient(email: string, password: string): Promise<any> {
    const client = await this.clientService.findOneByEmail(email);
    if (client && client.password === password) {
      const { password, ...result } = client;
      return result;
    }
    return null;
  }

}
