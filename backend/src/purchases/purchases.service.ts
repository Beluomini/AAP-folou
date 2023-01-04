import { Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Purchase, PurchaseDocument } from './entities/purchase.entity';

@Injectable()
export class PurchasesService {

  constructor(@InjectModel(Purchase.name) private purchaseModel : Model<PurchaseDocument>){}

  create(createPurchaseDto: CreatePurchaseDto) {
    const purchase = new this.purchaseModel(createPurchaseDto);
    return purchase.save();
  }

  findAll() {
    return this.purchaseModel.find();
  }

  findOne(id: string) {
    return this.purchaseModel.findById(id);
  }

  update(id: string, updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchaseModel.findByIdAndUpdate({ 
      _id: id 
    },{
      $set: updatePurchaseDto 
    },{ 
      new: true 
    });
  }

  remove(id: string) {
    return this.purchaseModel.deleteOne({ _id: id}).exec();
  }
}
