import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsUppercase, Max, Min } from "class-validator";
import { PetShop } from "src/pet-shops/entities/pet-shop.entity";

export class CreateProductDto {

  @IsNotEmpty()
  @ApiProperty({
    type: PetShop,
    description: "The foreig key to id of the pet-shop",
    example: "5f9f1b9b9c9d440000a1b1b1"
  })
  fk_id_pet_shop: PetShop;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: "The name of the product",
    example: "Ração baconzitos"
  })
  name: String;

  @ApiProperty({
    type: String,
    description: "The description of the product",
    example: "Ração para cães de grande porte"
  })
  description: String;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @ApiProperty({
    type: Number,
    description: "The price of the product in R$ (reais)",
    example: 86.00,
    minimum: 0
  })
  price: Number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @ApiProperty({
    type: Number,
    description: "The stock of the product",
    example: 1000
  })
  stock: Number;

  @ApiProperty({
    type: String,
    description: "The image of the product",
    example: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.portaldosbichos.com.br%2Fcachorros%2Fracao%2Fracao-seca%2Fracao-golden-formula-premium-especial-caes-adultos-racas-grande-salmao-e-arroz&psig=AOvVaw0GQSiYrzXVQcXEICxz-sc4&ust=1672958045424000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIi4y8L8rvwCFQAAAAAdAAAAABAG"
  })
  image: String;

  @IsNotEmpty()
  @IsUppercase()
  @ApiProperty({
    type: String,
    description: "The category of the product",
    example: "FOOD",
    enum: ['FOOD', 'TOY', 'CLOTHES', 'ACCESSORIES', 'SERVICE', 'OTHER']
  })
  category: String;
}
