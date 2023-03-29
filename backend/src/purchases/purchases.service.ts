import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel} from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { totalmem } from 'os';
import { ClientDocument } from 'src/clients/entities/client.entity';
import { OrderDocument } from 'src/orders/entities/order.entity';
import { PetShopDocument } from 'src/pet-shops/entities/pet-shop.entity';
import { ProductDocument } from 'src/products/entities/product.entity';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { Purchase, PurchaseDocument } from './entities/purchase.entity';

@Injectable()
export class PurchasesService {

  constructor(
    @InjectModel(Purchase.name) private purchaseModel : Model<PurchaseDocument>,
    @InjectModel('PetShop') private PetShopModel : Model<PetShopDocument>,
    @InjectModel('Product') private ProductModel : Model<ProductDocument>,
    @InjectModel('Client') private ClientModel : Model<ClientDocument>,
    @InjectModel('Order') private OrderModel : Model<OrderDocument>
    ){}

  async create(createPurchaseDto: CreatePurchaseDto) {
    const purchase = new this.purchaseModel(createPurchaseDto);

    if(isValidObjectId(purchase.fk_id_client)){
      const client = await this.ClientModel.findOne({ _id: purchase.fk_id_client });
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

    if(isValidObjectId(purchase.fk_id_pet_shop)){
      const petShop = await this.PetShopModel.findOne({ _id: purchase.fk_id_pet_shop });
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

    if(isValidObjectId(purchase.fk_id_order)){
      const order = await this.OrderModel.findOne({ _id: purchase.fk_id_order });
      if(order.status != 'SENT'){
        throw new HttpException(
          'Pedido com a chave informada já foi enviado e não pode ser modificado',
          HttpStatus.BAD_REQUEST,
        );
      }
      if(!order){
        throw new HttpException(
          'Pedido com a chave informada não existe',
          HttpStatus.BAD_REQUEST,
        );
      }
    }else{
      throw new HttpException(
        'Chave do pedido inválida',
        HttpStatus.BAD_REQUEST,
      );
    }

    if(isValidObjectId(purchase.fk_id_product)){
      const product = await this.ProductModel.findOne({ _id: purchase.fk_id_product });
      if(!product){
        throw new HttpException(
          'Produto com a chave informada não existe',
          HttpStatus.BAD_REQUEST,
        );
      }
    }else{
      throw new HttpException(
        'Chave do produto inválida',
        HttpStatus.BAD_REQUEST,
      );
    }
    
    return purchase.save();
  }

  findAll() {
    return this.purchaseModel.find();
  }

  findOne(id: string) {
    return this.purchaseModel.findById(id);
  }

  async findByPetshop(petshopId: String){
    if(isValidObjectId(petshopId)){
      return this.purchaseModel.find({ fk_id_pet_shop : petshopId });
    }else{
      throw new HttpException(
        'Chave do pet shop inválida',
        HttpStatus.BAD_REQUEST,
        );
    }
  }

  async findByClient(clientId: String){
    if(isValidObjectId(clientId)){
      return this.purchaseModel.find({ fk_id_client : clientId });
    }else{
      throw new HttpException(
        'Chave do cliente inválida',
        HttpStatus.BAD_REQUEST,
        );
    }
  }

  async findByOrder(orderId: String){
    if(isValidObjectId(orderId)){
      return this.purchaseModel.find({ fk_id_order : orderId });
    }else{
      throw new HttpException(
        'Chave do pedido inválida',
        HttpStatus.BAD_REQUEST,
        );
    }
  }

  async findByProduct(productId: String){
    if(isValidObjectId(productId)){
      return this.purchaseModel.find({ fk_id_product : productId });
    }else{
      throw new HttpException(
        'Chave do produto inválida',
        HttpStatus.BAD_REQUEST,
        );
    }
  }

  async update(id: string, updatePurchaseDto: UpdatePurchaseDto) {

    if(isValidObjectId(updatePurchaseDto.fk_id_client)){
      const client = await this.ClientModel.findOne({ _id: updatePurchaseDto.fk_id_client });
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

    if(isValidObjectId(updatePurchaseDto.fk_id_pet_shop)){
      const petShop = await this.PetShopModel.findOne({ _id: updatePurchaseDto.fk_id_pet_shop });
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

    if(isValidObjectId(updatePurchaseDto.fk_id_product)){
      const product = await this.ProductModel.findOne({ _id: updatePurchaseDto.fk_id_product });
      if(!product){
        throw new HttpException(
          'Produto com a chave informada não existe',
          HttpStatus.BAD_REQUEST,
        );
      }
    }else{
      throw new HttpException(
        'Chave do produto inválida',
        HttpStatus.BAD_REQUEST,
      );
    }

    if(isValidObjectId(updatePurchaseDto.fk_id_order)){
      const order = await this.OrderModel.findOne({ _id: updatePurchaseDto.fk_id_order });
      if(!order){
        throw new HttpException(
          'Pedido com a chave informada não existe',
          HttpStatus.BAD_REQUEST,
        );
      }
    }else{
      throw new HttpException(
        'Chave do pedido inválida',
        HttpStatus.BAD_REQUEST,
      );
    }

    if(!updatePurchaseDto.total_price){
      updatePurchaseDto.total_price = String(Number(updatePurchaseDto.quantity) * Number(updatePurchaseDto.unit_price));
    }

    return this.purchaseModel.findByIdAndUpdate({ 
      _id: id 
    },{
      $set: updatePurchaseDto 
    },{ 
      new: true 
    });
  }

  remove(id: string) {
    return this.purchaseModel.deleteOne({ _id: id }).exec();
  }
}
