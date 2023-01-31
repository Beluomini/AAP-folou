import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('purchases')
@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post()
  create(@Body() createPurchaseDto: CreatePurchaseDto) {
    return this.purchasesService.create(createPurchaseDto);
  }

  @Get()
  findAll() {
    return this.purchasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchasesService.findOne(id);
  }

  @Get('petshop/:id')
  findByPetshop(@Param('id') id: string) {
    return this.purchasesService.findByPetshop(id);
  }

  @Get('client/:id')
  findByClient(@Param('id') id: string) {
    return this.purchasesService.findByClient(id);
  }

  @Get('order/:id')
  findByOrder(@Param('id') id: string) {
    return this.purchasesService.findByOrder(id);
  }

  @Get('product/:id')
  findByProduct(@Param('id') id: string) {
    return this.purchasesService.findByProduct(id);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchasesService.update(id, updatePurchaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchasesService.remove(id);
  }
}
