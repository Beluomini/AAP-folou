import { Module } from '@nestjs/common';
import { PetShopsService } from './pet-shops.service';
import { PetShopsController } from './pet-shops.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PetShop, PetShopSchema } from './entities/pet-shop.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: PetShop.name, schema: PetShopSchema }]),
  ],
  controllers: [PetShopsController],
  providers: [PetShopsService],
  exports: [PetShopsService]
})
export class PetShopsModule {}
