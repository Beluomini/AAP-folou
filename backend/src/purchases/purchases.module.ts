import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Purchase, PurchaseSchema } from './entities/purchase.entity';
import { Product, ProductSchema } from 'src/products/entities/product.entity';
import { PetShop, PetShopSchema } from 'src/pet-shops/entities/pet-shop.entity';
import { Client, ClientSchema } from 'src/clients/entities/client.entity';
import { Order, OrderSchema } from 'src/orders/entities/order.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Purchase.name, schema: PurchaseSchema }]),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: PetShop.name, schema: PetShopSchema }]),
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [PurchasesController],
  providers: [PurchasesService]
})
export class PurchasesModule {}
