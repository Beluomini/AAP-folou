import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 404, description: 'Pedido não encontrado' })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Get('petshop/:id')
  findByPetshop(@Param('id') id: string) {
    return this.ordersService.findByPetshop(id);
  }

  @Get('client/:id')
  findByClient(@Param('id') id: string) {
    return this.ordersService.findByClient(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 404, description: 'Pedido não encontrado' })
  @ApiResponse({ status: 400, description: 'Data de pagamento inválida, o formato aceitável é: YYYY-MM-DD' })
  async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {

    const order = this.ordersService.findOne(id);
    if (!order) {
      throw new HttpException(
        'Pedido não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    const orderPaymentMethod = updateOrderDto.payment_method;
    if (orderPaymentMethod !== 'CREDIT_CARD' && orderPaymentMethod !== 'DEBIT_CARD' && orderPaymentMethod !== 'MONEY' && orderPaymentMethod !== 'PIX'){
      throw new HttpException(
        'Método de pagamento inválido, os metodos aceitáveis são: CREDIT_CARD, DEBIT_CARD, MONEY, PIX',
        HttpStatus.BAD_REQUEST,
      );
    }
    
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 404, description: 'Pedido não encontrado' })
  remove(@Param('id') id: string) {

    const order = this.ordersService.findOne(id);
    if (!order) {
      throw new HttpException(
        'Pedido não encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.ordersService.remove(id);
  }
}
