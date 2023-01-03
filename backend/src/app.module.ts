import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PetShopsModule } from './pet-shops/pet-shops.module';
import { ClientsModule } from './clients/clients.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://beluomini:aapfolou@app-folou.ws7wgxl.mongodb.net/test'),
    PetShopsModule,
    ClientsModule,
    OrdersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
