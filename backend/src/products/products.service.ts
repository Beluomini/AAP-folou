import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { PetShop, PetShopDocument } from 'src/pet-shops/entities/pet-shop.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor (
    @InjectModel(Product.name) private ProductModel : Model<ProductDocument>,
    @InjectModel(PetShop.name) private PetShopModel: Model<PetShopDocument>
    ) {}

  async create(createProductDto: CreateProductDto) {
    const product = new this.ProductModel(createProductDto);

    if(isValidObjectId(product.fk_id_pet_shop)){
      const petShop = await this.PetShopModel.findOne({ _id: product.fk_id_pet_shop });
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

    if (product.category !== 'FOOD' && product.category !== 'TOY' && product.category !== 'CLOTHES' && product.category !== 'ACCESSORIES' && product.category !== 'SERVICE' && product.category !== 'OTHER'){
      throw new HttpException(
        'Categoria inválida as categorias aceitáveis são: FOOD, TOY, CLOTHES, ACCESSORIES, SERVICE, OTHER',
        HttpStatus.BAD_REQUEST,
      );
    }

    return product.save();
  }

  findAll() {
    return this.ProductModel.find();
  }

  async findOne(id: string) {

    if(!isValidObjectId(id)){
      throw new HttpException(
        'Chave do produto inválida',
        HttpStatus.BAD_REQUEST,
      );
    }else{
      const product = await this.ProductModel.findOne({ _id: id });
      if(!product){
        throw new HttpException(
          'Produto com a chave informada não existe',
          HttpStatus.NOT_FOUND,
        );
      }
    }

    return this.ProductModel.findById(id);
  }

  async findByPetshop(petshopId: String){
    if(isValidObjectId(petshopId)){
      return this.ProductModel.find({ fk_id_pet_shop : petshopId });
    }else{
      throw new HttpException(
        'Chave do pet shop inválida',
        HttpStatus.BAD_REQUEST,
        );
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
  
    if(!isValidObjectId(id)){
      throw new HttpException(
        'Chave do produto inválida',
        HttpStatus.BAD_REQUEST,
      );
    }

    const product = await this.ProductModel.findOne({ _id: id });
    if(!product){
      throw new HttpException(
        'Produto com a chave informada não existe',
        HttpStatus.BAD_REQUEST,
      );
    }
    
    if(updateProductDto.fk_id_pet_shop){
      if(isValidObjectId(updateProductDto.fk_id_pet_shop)){
        const petShop = await this.PetShopModel.findOne({ _id: updateProductDto.fk_id_pet_shop });
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

    if(updateProductDto.category){
      if (updateProductDto.category !== 'FOOD' && updateProductDto.category !== 'TOY' && updateProductDto.category !== 'CLOTHES' && updateProductDto.category !== 'ACCESSORIES' && updateProductDto.category !== 'SERVICE' && updateProductDto.category !== 'OTHER'){
        throw new HttpException(
          'Categoria inválida as categorias aceitáveis são: FOOD, TOY, CLOTHES, ACCESSORIES, SERVICE, OTHER',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    return this.ProductModel.findByIdAndUpdate({
      _id: id
    },{
      $set: updateProductDto
    },{
      new: true
    });
  }

  async remove(id: string) {
    
    if(!isValidObjectId(id)){
      throw new HttpException(
        'Chave do produto inválida',
        HttpStatus.BAD_REQUEST,
      );
    }

    const product = await this.ProductModel.findOne({ _id: id });
    if(!product){
      throw new HttpException(
        'Produto com a chave informada não existe',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.ProductModel.deleteOne({ _id: id }).exec();
  }
}
