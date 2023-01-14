import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, Min } from "class-validator";
import { Client } from "src/clients/entities/client.entity";
import { Order } from "src/orders/entities/order.entity";
import { PetShop } from "src/pet-shops/entities/pet-shop.entity";
import { Product } from "src/products/entities/product.entity";

export class CreatePurchaseDto {

    @IsNotEmpty()
    @ApiProperty({
        type: PetShop,
        description: 'The foreig key to id of the pet-shop',
        example: '5f9f1b9b9c9d440000a1b1b1'
    })
    fk_id_pet_shop: PetShop;

    @IsNotEmpty()
    @ApiProperty({
        type: Client,
        description: 'The foreig key to id of the client',
        example: '5f9f1b9b9c9d440000a1b1b1'
    })
    fk_id_client: Client;

    @IsNotEmpty()
    @ApiProperty({
        type: Order,
        description: 'The foreig key to id of the order',
        example: '5f9f1b9b9c9d440000a1b1b1'
    })
    fk_id_order: Order;

    @IsNotEmpty()
    @ApiProperty({
        type: Product,
        description: 'The foreig key to id of the product',
        example: '5f9f1b9b9c9d440000a1b1b1'
    })
    fk_id_product: Product;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @ApiProperty({
        type: Number,
        description: 'The quantity of the product',
        example: 3
    })
    quantity: Number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    @ApiProperty({
        type: Number,
        description: 'The unit price of the product',
        example: 10.00
    })
    unit_price: Number;

    @ApiProperty({
        type: Number,
        description: 'The total price of the product',
        example: 30.00
    })
    total_price: Number;

    @ApiProperty({
        type: String,
        description: 'The description of the purchase',
        example: 'Ração sem Agrotoxicos'
    })
    description: String;
}
