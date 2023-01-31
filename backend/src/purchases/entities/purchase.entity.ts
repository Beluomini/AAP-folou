import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Client } from "src/clients/entities/client.entity";
import { Order } from "src/orders/entities/order.entity";
import { PetShop } from "src/pet-shops/entities/pet-shop.entity";
import { Product } from "src/products/entities/product.entity";

export type PurchaseDocument = HydratedDocument<Purchase>;

@Schema()
export class Purchase {

  @Prop({ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'PetShop', 
    required: true 
  })
  fk_id_pet_shop: PetShop;

  @Prop({ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Client', 
    required: true 
  })
  fk_id_client: Client;

  @Prop({ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Order', 
    required: true 
  })
  fk_id_order: Order;

  @Prop({ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', 
    required: true 
  })
  fk_id_product: Product;

  @Prop({ 
    type: String,
    required: true,
    min: 1 
  })
  quantity: string;

  @Prop({
    type: String,
    required: true,
    min: 0 
  })
  unit_price: string;

  @Prop({
    type: String
  })
  total_price: string;

  @Prop({
    type: String
  })
  description: string;
    
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);