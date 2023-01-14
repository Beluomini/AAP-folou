import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './entities/order.entity';
import { ClientsController } from 'src/clients/clients.controller';
import { Client, ClientSchema } from 'src/clients/entities/client.entity';
import { ClientsService } from 'src/clients/clients.service';
import { PetShop, PetShopSchema } from 'src/pet-shops/entities/pet-shop.entity';
import { PetShopsController } from 'src/pet-shops/pet-shops.controller';
import { PetShopsService } from 'src/pet-shops/pet-shops.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
    MongooseModule.forFeature([{ name: PetShop.name, schema: PetShopSchema }]),
  ],
  controllers: [OrdersController, ClientsController, PetShopsController],
  providers: [OrdersService, ClientsService, PetShopsService]
})
export class OrdersModule {}
