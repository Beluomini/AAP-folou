import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePetShopDto } from './dto/create-pet-shop.dto';
import { UpdatePetShopDto } from './dto/update-pet-shop.dto';
import { PetShop, PetShopDocument } from './entities/pet-shop.entity';

@Injectable()
export class PetShopsService {

  constructor(@InjectModel(PetShop.name) private petShopModel: Model<PetShopDocument>) {}

  create(createPetShopDto: CreatePetShopDto) {
    const petShop = new this.petShopModel(createPetShopDto);
    return petShop.save();
  }

  findAll() {
    return this.petShopModel.find();
  }

  findOne(id: string) {
    return this.petShopModel.findById(id);
  }

  findOneByCnpj(cnpj: string) {
    return this.petShopModel.findOne({ cnpj });
  }

  update(id: string, updatePetShopDto: UpdatePetShopDto) {
    return this.petShopModel.findByIdAndUpdate({
      _id: id
    },{
      $set: updatePetShopDto,
    },{
      new: true
    });
  }

  remove(id: string) {
    return this.petShopModel.deleteOne({ _id: id }).exec();
  }
}
