import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPostalCode, Length } from "class-validator";

export class CreatePetShopDto {

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        description: 'The name of the pet-shop',
        example: 'Molininha',
    })
    name: string;
    
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        type: String,
        description: 'The email of the pet-shop',
        example: 'petshopdomau@gmail.com'
    })
    email: string;
    
    @IsNotEmpty()
    @Length(6, 20, { message: 'A senha deve ter entre 6 e 20 caracteres' })
    @ApiProperty({
        type: String,
        description: 'The password of the pet-shop',
        example: '123456'
    })
    password: string;
    
    @IsNotEmpty()
    @Length(18, 18, { message: 'O CNPJ possui 14 numeros, digite no formato XX.XXX.XXX/XXXX-XX' })
    @ApiProperty({
        type: String,
        description: 'The CNPJ of the pet-shop',
        example: '00.000.000/0000-00'
    })
    cnpj: string;
    
    @Length(14, 15, { message: 'Um telefone possui de 10 a 11 digitos com o DDD, digite no formato (XX) XXXXX-XXXX' })
    @ApiProperty({
        type: String,
        description: 'The phone of the pet-shop',
        example: '(00) 00000-0000'
    })
    contact: string;
    
    @IsNotEmpty()
    @IsPostalCode('BR')
    @ApiProperty({
        type: String,
        description: 'The CEP of the pet-shop',
        example: '00000-000'
    })
    cep: string;
    
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        description: 'The address of the pet-shop',
        example: 'Rua dos tontos, 0'
    })
    address: string;
}

