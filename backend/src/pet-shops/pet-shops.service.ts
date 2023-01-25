import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreatePetShopDto } from './dto/create-pet-shop.dto';
import { UpdatePetShopDto } from './dto/update-pet-shop.dto';
import { PetShop, PetShopDocument } from './entities/pet-shop.entity';

@Injectable()
export class PetShopsService {

  constructor(@InjectModel(PetShop.name) private petShopModel: Model<PetShopDocument>) {}

  async create(createPetShopDto: CreatePetShopDto) {
    const petShop = new this.petShopModel(createPetShopDto);

    const cnpj = createPetShopDto.cnpj;
    const petShopCnpjExists = await this.petShopModel.findOne({ cnpj });
    if (petShopCnpjExists) {
      throw new HttpException(
        'O CNPJ já está sendo usado',
        HttpStatus.BAD_REQUEST,
      );
    }

    return petShop.save();
  }

  findAll() {
    return this.petShopModel.find();
  }

  async findOne(id: string) {

    if(!isValidObjectId(id)){
      throw new HttpException(
        'Chave do petshop inválida',
        HttpStatus.BAD_REQUEST,
      );
    }else{
      const petshop = await this.petShopModel.findOne({ _id: id });
      if(!petshop){
        throw new HttpException(
          'Petshop com a chave informada não existe',
          HttpStatus.NOT_FOUND,
        );
      }
    }

    return this.petShopModel.findById(id);
  }

  findOneByCnpj(cnpj: string) {
    return this.petShopModel.findOne({ cnpj });
  }

  async findOneByEmail(email: string): Promise<PetShop | undefined> {
    return await this.petShopModel.findOne({ email });
  }

  async update(id: string, updatePetShopDto: UpdatePetShopDto) {

    if(!isValidObjectId(id)){
      throw new HttpException(
        'Chave do petshop inválida',
        HttpStatus.BAD_REQUEST,
      );
    }else{
      const petshop = await this.petShopModel.findOne({ _id: id });
      if(!petshop){
        throw new HttpException(
          'Petshop com a chave informada não existe',
          HttpStatus.NOT_FOUND,
        );
      }
    }

    if(updatePetShopDto.cnpj){
      const cnpj = updatePetShopDto.cnpj;
      const petShopCnpjExists = await this.petShopModel.findOne({ cnpj });
      if (petShopCnpjExists) {
        throw new HttpException(
          'O CNPJ já está sendo usado',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    return this.petShopModel.findByIdAndUpdate({
      _id: id
    },{
      $set: updatePetShopDto,
    },{
      new: true
    });
  }

  async remove(id: string) {

    if(!isValidObjectId(id)){
      throw new HttpException(
        'Chave do petshop inválida',
        HttpStatus.BAD_REQUEST,
      );
    }else{
      const petshop = await this.petShopModel.findOne({ _id: id });
      if(!petshop){
        throw new HttpException(
          'Petshop com a chave informada não existe',
          HttpStatus.NOT_FOUND,
        );
      }
    }

    return this.petShopModel.deleteOne({ _id: id }).exec();
  }
}
