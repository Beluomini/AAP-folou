import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor (@InjectModel(Product.name) private ProductModel : Model<ProductDocument>) {}

  create(createProductDto: CreateProductDto) {
    const product = new this.ProductModel(createProductDto);
    return product.save();
  }

  findAll() {
    return this.ProductModel.find();
  }

  findOne(id: string) {
    return this.ProductModel.findById(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.ProductModel.findByIdAndUpdate({
      _id: id
    },{
      $set: updateProductDto
    },{
      new: true
    });
  }

  remove(id: string) {
    return this.ProductModel.deleteOne({ _id: id }).exec();
  }
}
