import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isDateString, IsMongoId, isMongoId } from 'class-validator';
import { isValidObjectId, Model } from 'mongoose';
import { Client, ClientDocument } from 'src/clients/entities/client.entity';
import { PetShop, PetShopDocument } from 'src/pet-shops/entities/pet-shop.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order, OrderDocument } from './entities/order.entity';

@Injectable()
export class OrdersService {

  constructor(
    @InjectModel(Order.name) private OrderModel: Model<OrderDocument>, 
    @InjectModel(Client.name) private ClientModel: Model<ClientDocument>, 
    @InjectModel(PetShop.name) private PetShopModel: Model<PetShopDocument>
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const Order = new this.OrderModel(createOrderDto);

    if(isValidObjectId(Order.fk_id_client)){
      const client = await this.ClientModel.findOne({ _id: Order.fk_id_client });
      if(!client){
        throw new HttpException(
          'Cliente com a chave informada não existe',
          HttpStatus.BAD_REQUEST,
        );
      }
    }else{
      throw new HttpException(
        'Chave do cliente inválida',
        HttpStatus.BAD_REQUEST,
      );
    }

    if(isValidObjectId(Order.fk_id_pet_shop)){
      const petShop = await this.PetShopModel.findOne({ _id: Order.fk_id_pet_shop });
      if(!petShop){
        throw new HttpException(
          'Pet shop com a chave informada não existe',
          HttpStatus.BAD_REQUEST,
        );
      }
    }else{
      throw new HttpException(
        'Chave do pet shop inválida',
        HttpStatus.BAD_REQUEST,
      );
    }

    if(Order.create_date){
      if(isDateString(Order.create_date)){
        Order.create_date = new Date(Order.create_date);
      }else{
        throw new HttpException(
          'Data de criação é inválida, deixe vazio para pegar a data atual ou no formato: YYYY-MM-DD',
          HttpStatus.BAD_REQUEST,
        );
      }
    }else{
      Order.create_date = new Date();
    }

    if(Order.payment_date){
      if(isDateString(Order.payment_date)){
        Order.payment_date = new Date(Order.payment_date);
        if(Order.payment_date < Order.create_date){
          throw new HttpException(
            'Data de pagamento não pode ser menor que a data de criação',
            HttpStatus.BAD_REQUEST,
          );
        }
      }else{
        throw new HttpException(
          'Data de pagamento é inválida, deixe vazio para pegar a data atual ou no formato: YYYY-MM-DD',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    if (Order.payment_method !== 'CREDIT_CARD' && Order.payment_method !== 'DEBIT_CARD' && Order.payment_method !== 'MONEY' && Order.payment_method !== 'PIX'){
      throw new HttpException(
        'Método de pagamento inválido, os metodos aceitáveis são: CREDIT_CARD, DEBIT_CARD, MONEY, PIX',
        HttpStatus.BAD_REQUEST,
      );
    }

    if(Order.status !== 'SENT' && Order.status !== 'VISUALIZED' && Order.status !== 'PROCESSING' && Order.status !== 'CANCELED' && Order.status !== 'FINISHED'){
      throw new HttpException(
        'Status inválido, os status aceitáveis são: SENT, VISUALIZED, PROCESSING, CANCELED, FINISHED',
        HttpStatus.BAD_REQUEST,
      );
    }

    return Order.save();
  }

  findAll() {
    return this.OrderModel.find();
  }

  async findOne(id: string) {

    if(!isValidObjectId(id)){
      throw new HttpException(
        'Chave do produto inválida',
        HttpStatus.BAD_REQUEST,
      );
    }else{
      const order = await this.OrderModel.findById(id);
      if (!order) {
        throw new HttpException(
          'Pedido não encontrado',
          HttpStatus.NOT_FOUND,
        );
      }
      
      return this.OrderModel.findById(id);
    }

  }

  async getOrderStatus (id:String) {
      const order = await this.OrderModel.findById(id);
      return order.status;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {

    if(updateOrderDto.fk_id_client){
      if(isValidObjectId(updateOrderDto.fk_id_client)){
        const client = await this.ClientModel.findOne({ _id: updateOrderDto.fk_id_client });
        if(!client){
          throw new HttpException(
            'Cliente com a chave informada não existe',
            HttpStatus.BAD_REQUEST,
          );
        }
      }else{
        throw new HttpException(
          'Chave do cliente inválida',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    if(updateOrderDto.fk_id_pet_shop){
      if(isValidObjectId(updateOrderDto.fk_id_pet_shop)){
        const petShop = await this.PetShopModel.findOne({ _id: updateOrderDto.fk_id_pet_shop });
        if(!petShop){
          throw new HttpException(
            'Pet shop com a chave informada não existe',
            HttpStatus.BAD_REQUEST,
          );
        }
      }else{
        throw new HttpException(
          'Chave do pet shop inválida',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    if(updateOrderDto.create_date){
      if(isDateString(updateOrderDto.create_date)){
        updateOrderDto.create_date = new Date(updateOrderDto.create_date);
      }else{
        throw new HttpException(
          'Data de criação é inválida, deixe vazio para pegar a data atual ou no formato: YYYY-MM-DD',
          HttpStatus.BAD_REQUEST,
        );
      }
    }else{
      updateOrderDto.create_date = new Date();
    }

    if(updateOrderDto.payment_date){
      if(isDateString(updateOrderDto.payment_date)){
        updateOrderDto.payment_date = new Date(updateOrderDto.payment_date);
        if(updateOrderDto.payment_date < updateOrderDto.create_date){
          throw new HttpException(
            'Data de pagamento não pode ser menor que a data de criação',
            HttpStatus.BAD_REQUEST,
          );
        }
      }else{
        throw new HttpException(
          'Data de pagamento é inválida, deixe vazio para pegar a data atual ou no formato: YYYY-MM-DD',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    if(updateOrderDto.payment_method){
      if (updateOrderDto.payment_method !== 'CREDIT_CARD' && updateOrderDto.payment_method !== 'DEBIT_CARD' && updateOrderDto.payment_method !== 'MONEY' && updateOrderDto.payment_method !== 'PIX'){
        throw new HttpException(
          'Método de pagamento inválido, os metodos aceitáveis são: CREDIT_CARD, DEBIT_CARD, MONEY, PIX',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    if(updateOrderDto.status){
      if(updateOrderDto.status !== 'SENT' && updateOrderDto.status !== 'VISUALIZED' && updateOrderDto.status !== 'PROCESSING' && updateOrderDto.status !== 'CANCELED' && updateOrderDto.status !== 'FINISHED'){
        throw new HttpException(
          'Status inválido, os status aceitáveis são: SENT, VISUALIZED, PROCESSING, CANCELED, FINISHED',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    return this.OrderModel.findByIdAndUpdate({
      _id: id
    },{
      $set: updateOrderDto,
    },{
      new: true
    })
  }

  remove(id: string) {
    return this.OrderModel.deleteOne({ _id: id }).exec();
  }
}
