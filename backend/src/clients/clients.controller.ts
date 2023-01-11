import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'Cliente criado com sucesso' })
  @ApiResponse({ status: 400, description: 'O cpf já está sendo usado' })
  async create(@Body() createClientDto: CreateClientDto) {

    const clientCpfExists = await this.clientsService.findOneByCpf(createClientDto.cpf);
    if (clientCpfExists) {
      throw new HttpException(
        'O cpf já está sendo usado',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.clientsService.create(createClientDto);
  }

  @Get()
  findAll() {

    return this.clientsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  async findOne(@Param('id') id: string) {

    const client = await this.clientsService.findOne(id);
    if (!client) {
      throw new HttpException(
        'Cliente não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.clientsService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  @ApiResponse({ status: 400, description: 'O cpf já está sendo usado' })
  async update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {

    const client = await this.clientsService.findOne(id);
    if (!client) {
      throw new HttpException(
        'Cliente não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    const clientCpfExists = await this.clientsService.findOneByCpf(updateClientDto.cpf);
    if (clientCpfExists) {
      throw new HttpException(
        'O cpf já está sendo usado',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.clientsService.update(id, updateClientDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 404, description: 'Cliente não encontrado' })
  async remove(@Param('id') id: string) {
    const client = await this.clientsService.findOne(id);
    if (!client) {
      throw new HttpException(
        'Cliente não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.clientsService.remove(id);
  }
}
