import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsUppercase, MaxLength, Min } from "class-validator";
import { Types } from "mongoose";
import { Client } from "src/clients/entities/client.entity";
import { PetShop } from "src/pet-shops/entities/pet-shop.entity";

export class CreateOrderDto {

    @IsNotEmpty()
    @ApiProperty({
        type: Types.ObjectId,
        description: 'The foreig key to id of the client',
        example: '5f9f1b9b9c9d440000a1b1b1',
    })
    fk_id_client: Client;
    
    @IsNotEmpty()
    @ApiProperty({
        type: Types.ObjectId,
        description: 'The foreig key to id of the pet-shop',
        example: '5f9f1b9b9c9d440000a1b1b1',
    })
    fk_id_pet_shop: PetShop;
    
    @ApiProperty({
        type: Date,
        description: 'The date of the order',
        example: '2020-11-22',
        default: new Date()
    })
    create_date: Date;
    
    @ApiProperty({
        type: Date,
        description: 'The date of the payment of the order',
        example: '2020-11-03'
    })
    payment_date: Date;
    
    @ApiProperty({
        type: Number,
        description: 'The total price of the order in R$ (reais)',
        example: 100.00,
        minimum: 0
    })
    price: Number;
    
    @IsNotEmpty()
    @IsUppercase()
    @ApiProperty({
        type: String,
        description: 'The payment method of the order (CREDIT_CARD, DEBIT_CARD, MONEY, PIX)',
        example: 'CREDIT_CARD',
        default: 'MONEY',
        enum: ['CREDIT_CARD', 'DEBIT_CARD', 'MONEY', 'PIX']
    })
    payment_method: String;
    
    @IsUppercase()
    @MaxLength(10)
    @ApiProperty({
        type: String,
        description: 'The code of cupom',
        example: 'CUPOM10'
    })
    fk_cupom: String;
    
    @IsNotEmpty()
    @IsUppercase()
    @ApiProperty({
        type: String,
        description: 'The status of the order (SENT, VISUALIZED, PROCESSING, CANCELED, FINISHED)',
        example: 'SENT',
        default: 'SENT',
        enum: ['SENT', 'VISUALIZED', 'PROCESSING', 'CANCELED', 'FINISHED']
    })
    status: String;
    
}