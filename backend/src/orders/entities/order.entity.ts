import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
    @Prop()
    fk_user_id: String;

    @Prop()
    fk_pet_shop_id: String;

    @Prop()
    create_date: String;

    @Prop()
    payment_date: String;

    @Prop()
    price: number;

    @Prop()
    buy_method: String;

    @Prop()
    fk_cupom: String;

    @Prop()
    status: String;
}

export const OrderSchema = SchemaFactory.createForClass(Order);