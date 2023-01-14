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
  create(@Body() createPetShopDto: CreatePetShopDto) {
    return this.petShopsService.create(createPetShopDto);
  }

  @Get()
  findAll() {
    return this.petShopsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 404, description: 'Pet Shop não encontrado' })
  findOne(@Param('id') id: string) {
    return this.petShopsService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 404, description: 'Pet Shop não encontrado' })
  @ApiResponse({ status: 400, description: 'O cnpj já está sendo usado' })
  update(@Param('id') id: string, @Body() updatePetShopDto: UpdatePetShopDto) {
    return this.petShopsService.update(id, updatePetShopDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 404, description: 'Pet Shop não encontrado' })
  remove(@Param('id') id: string) {
    return this.petShopsService.remove(id);
  }
}
