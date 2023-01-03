import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order, OrderDocument } from './entities/order.entity';

@Injectable()
export class OrdersService {

  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  create(createOrderDto: CreateOrderDto) {
    const Order = new this.orderModel(createOrderDto);
    return Order.save();
  }

  findAll() {
    return this.orderModel.find();
  }

  findOne(id: string) {
    return this.orderModel.findById(id);
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderModel.findByIdAndUpdate({
      _id: id
    },{
      $set: updateOrderDto,
    },{
      new: true
    })
  }

  remove(id: string) {
    return this.orderModel.deleteOne({ _id: id }).exec();
  }
}
