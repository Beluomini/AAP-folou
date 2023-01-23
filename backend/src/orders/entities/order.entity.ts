import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { maxLength } from 'class-validator';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Client } from 'src/clients/entities/client.entity';
import { PetShop } from 'src/pet-shops/entities/pet-shop.entity';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
    @Prop({ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Client', 
        required: true
    })
    fk_id_client: Client;

    @Prop({ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'PetShop', 
        required: true 
    })
    fk_id_pet_shop: PetShop;

    @Prop({ 
        type: Date,
        default: new Date()
    })
    create_date: Date;

    @Prop({
        type: Date
    })
    payment_date: Date;

    @Prop({ 
        type: String
    })
    price: string;

    @Prop({
        type: String,
        required: true,
        enum: ['CREDIT_CARD', 'DEBIT_CARD', 'MONEY', 'PIX'],
        default: 'MONEY',
        uppercase: true
    })
    payment_method: String;

    @Prop({
        type: String,
        maxLength: 10
    })
    fk_cupom: String;

    @Prop({
        type: String,
        required: true,
        enum: ['SENT', 'VISUALIZED', 'PROCESSING', 'CANCELED', 'FINISHED'],
        default: 'SENT',
        uppercase: true
    })
    status: String;
}

export const OrderSchema = SchemaFactory.createForClass(Order);