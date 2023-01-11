import { ApiProperty } from "@nestjs/swagger";

export class CreatePetShopDto {
    @ApiProperty({
        type: String,
        description: 'The name of the pet-shop',
        example: 'Molininha',
    })
    name: string;
    
    @ApiProperty({
        type: String,
        description: 'The email of the pet-shop',
        example: 'petshopdomau@gmail.com'
    })
    email: string;
    
    @ApiProperty({
        type: String,
        description: 'The password of the pet-shop',
        example: '123456'
    })
    password: string;
    
    @ApiProperty({
        type: String,
        description: 'The CNPJ of the pet-shop',
        example: '00.000.000/0000-00'
    })
    cnpj: string;
    
    @ApiProperty({
        type: String,
        description: 'The phone of the pet-shop',
        example: '(00) 00000-0000'
    })
    contact: string;
    
    @ApiProperty({
        type: String,
        description: 'The CEP of the pet-shop',
        example: '00000-000'
    })
    cep: string;
    
    @ApiProperty({
        type: String,
        description: 'The address of the pet-shop',
        example: 'Rua dos tontos, 0'
    })
    address: string;
}

