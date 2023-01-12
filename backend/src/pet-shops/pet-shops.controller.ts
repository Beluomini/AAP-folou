import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { PetShopsService } from './pet-shops.service';
import { CreatePetShopDto } from './dto/create-pet-shop.dto';
import { UpdatePetShopDto } from './dto/update-pet-shop.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('pet-shops')
@Controller('pet-shops')
export class PetShopsController {
  constructor(private readonly petShopsService: PetShopsService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'Pet Shop criado com sucesso' })
  @ApiResponse({ status: 400, description: 'O cnpj já está sendo usado' })
  async create(@Body() createPetShopDto: CreatePetShopDto) {

    const petShopCnpjExists = await this.petShopsService.findOneByCnpj(createPetShopDto.cnpj);
    if (petShopCnpjExists) {
      throw new HttpException(
        'O cnpj já está sendo usado',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.petShopsService.create(createPetShopDto);
  }

  @Get()
  findAll() {
    return this.petShopsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 404, description: 'Pet Shop não encontrado' })
  async findOne(@Param('id') id: string) {
    
    const petShop = await this.petShopsService.findOne(id);
    if (!petShop) {
      throw new HttpException(
        'Pet Shop não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.petShopsService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 404, description: 'Pet Shop não encontrado' })
  @ApiResponse({ status: 400, description: 'O cnpj já está sendo usado' })
  async update(@Param('id') id: string, @Body() updatePetShopDto: UpdatePetShopDto) {

    const petShop = await this.petShopsService.findOne(id);
    if (!petShop) {
      throw new HttpException(
        'Pet Shop não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    const petShopCnpjExists = await this.petShopsService.findOneByCnpj(updatePetShopDto.cnpj);
    if (petShopCnpjExists) {
      throw new HttpException(
        'O cnpj já está sendo usado',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.petShopsService.update(id, updatePetShopDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 404, description: 'Pet Shop não encontrado' })
  async remove(@Param('id') id: string) {

    const petShop = await this.petShopsService.findOne(id);
    if (!petShop) {
      throw new HttpException(
        'Pet Shop não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.petShopsService.remove(id);
  }
}
