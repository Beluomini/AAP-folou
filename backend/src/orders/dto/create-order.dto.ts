import { ApiProperty } from "@nestjs/swagger";
import { Client } from "src/clients/entities/client.entity";
import { PetShop } from "src/pet-shops/entities/pet-shop.entity";


export enum payment_role {
    credit_card = 'credit_card',
    money = 'money',
    pix = 'pix'
}

export class CreateOrderDto {
    @ApiProperty({
        type: Client,
        description: 'The foreig key to id of the client',
        example: '5f9f1b9b9c9d440000a1b1b1',
    })
    fk_id_client: Client;
    
    @ApiProperty({
        type: PetShop,
        description: 'The foreig key to id of the pet-shop',
        example: '5f9f1b9b9c9d440000a1b1b1',
    })
    fk_id_pet_shop: PetShop;
    
    @ApiProperty({
        type: Date,
        description: 'The date of the order',
        example: '2020-11-01',
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
        example: 100.00
    })
    price: Number;
    
    @ApiProperty({
        type: String,
        description: 'The payment method of the order',
        example: 'credit_card'
    })
    payment_method: String;
    
    @ApiProperty({})
    fk_cupom: String;
    
    @ApiProperty({})
    status: String;
    
}