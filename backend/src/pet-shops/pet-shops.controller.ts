import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetShopsService } from './pet-shops.service';
import { CreatePetShopDto } from './dto/create-pet-shop.dto';
import { UpdatePetShopDto } from './dto/update-pet-shop.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('pet-shops')
@Controller('pet-shops')
export class PetShopsController {
  constructor(private readonly petShopsService: PetShopsService) {}

  @Post()
  create(@Body() createPetShopDto: CreatePetShopDto) {
    return this.petShopsService.create(createPetShopDto);
  }

  @Get()
  findAll() {
    return this.petShopsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petShopsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetShopDto: UpdatePetShopDto) {
    return this.petShopsService.update(id, updatePetShopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petShopsService.remove(id);
  }
}
