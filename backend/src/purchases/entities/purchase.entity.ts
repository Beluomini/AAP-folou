import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Client } from "src/clients/entities/client.entity";
import { Order } from "src/orders/entities/order.entity";
import { PetShop } from "src/pet-shops/entities/pet-shop.entity";
import { Product } from "src/products/entities/product.entity";

export type PurchaseDocument = HydratedDocument<Purchase>;

@Schema()
export class Purchase {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: PetShop.name, required: true })
  fk_id_pet_shop: PetShop;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Client.name, required: true })
  fk_id_client: Client;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Order.name, required: true })
  fk_id_order: Order;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Product.name, required: true })
  fk_id_product: Product;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  unit_price: number;

  @Prop()
  total_price: number;

  @Prop()
  description: string;
    
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);