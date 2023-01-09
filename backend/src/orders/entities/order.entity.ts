import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { DateUnit, HydratedDocument } from 'mongoose';
import { Client } from 'src/clients/entities/client.entity';
import { PetShop } from 'src/pet-shops/entities/pet-shop.entity';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Client.name, required: true })
    fk_id_client: Client;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: PetShop.name, required: true })
    fk_id_pet_shop: PetShop;

    @Prop({ default: new Date() })
    create_date: Date;

    @Prop({})
    payment_date: Date;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    payment_method: String;

    @Prop({})
    fk_cupom: String;

    @Prop({})
    status: String;
}

export const OrderSchema = SchemaFactory.createForClass(Order);