import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto {
    @ApiProperty({
        type: String,
        description: 'The name of the client',
        example: 'Molininha',
    })
    name: string;
    
    @ApiProperty({
        type: String,
        description: 'The email of the client',
        example: 'molininha@gmail.com'
    })
    email: string;
    
    @ApiProperty({
        type: String,
        description: 'The password of the client',
        example: '123456'
    })
    password: string;
    
    @ApiProperty({
        type: String,
        description: 'The CPF of the client',
        example: '000.000.000-00'
    })
    cpf: string;
    
    @ApiProperty({
        type: String,
        description: 'The phone of the client',
        example: '(00) 00000-0000'
    })
    contact: string;
    
    @ApiProperty({
        type: String,
        description: 'The CEP of the client',
        example: '00000-000'
    })
    cep: string;
    
    @ApiProperty({
        type: String,
        description: 'The address of the client',
        example: 'Rua dos bobos, 0'
    })
    address: string;
}
