import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPostalCode, Length } from "class-validator";

export class CreateClientDto {
    
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        description: 'The name of the client',
        example: 'Molininha',
    })
    name: string;
    
    
    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        type: String,
        description: 'The email of the client',
        example: 'molininha@gmail.com'
    })
    email: string;
    
    @IsNotEmpty()
    @Length(6, 20, { message: 'A senha deve ter entre 6 e 20 caracteres' })
    @ApiProperty({
        type: String,
        description: 'The password of the client',
        example: '123456'
    })
    password: string;
    
    @IsNotEmpty()
    @Length(14, 14, { message: 'O CPF possui 11 numeros, digite no formato XXX.XXX.XXX-XX' })
    @ApiProperty({
        type: String,
        description: 'The CPF numbers of the client',
        example: '000.000.000-00'
    })
    cpf: string;
    
    @Length(14, 15, { message: 'Um telefone possui de 10 a 11 digitos com o DDD, digite no formato (XX) XXXXX-XXXX' })
    @ApiProperty({
        type: String,
        description: 'The phone of the client',
        example: '(00) 00000-0000'
    })
    contact: string;
    
    @IsNotEmpty()
    @IsPostalCode('BR')
    @ApiProperty({
        type: String,
        description: 'The CEP of the client',
        example: '00000-000'
    })
    cep: string;
    
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        description: 'The address of the client',
        example: 'Rua dos bobos, 0'
    })
    address: string;
}
