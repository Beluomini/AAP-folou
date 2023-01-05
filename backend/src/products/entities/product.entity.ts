import { Type } from "@nestjs/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { PetShop } from "src/pet-shops/entities/pet-shop.entity";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: PetShop.name, required: true })
  fk_id_pet_shop: PetShop;

  @Prop({ required: true })
  name: string;

  @Prop({})
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  stock: number;

  @Prop()
  image: string;

  @Prop({ required: true })
  category: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);