import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Purchase, PurchaseSchema } from './entities/purchase.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Purchase.name, schema: PurchaseSchema }]),
  ],
  controllers: [PurchasesController],
  providers: [PurchasesService]
})
export class PurchasesModule {}
