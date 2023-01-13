import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { PetShop } from "src/pet-shops/entities/pet-shop.entity";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {

  @Prop({ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'PetShop', 
    required: true 
  })
  fk_id_pet_shop: PetShop;

  @Prop({ 
    type: String,
    required: true 
  })
  name: string;

  @Prop({
    type: String
  })
  description: string;

  @Prop({ 
    type: Number,
    required: true,
    min: 0 
  })
  price: number;

  @Prop({
    type: Number,
    required: true,
    min: 0
  })
  stock: number;

  @Prop({
    type: String
  })
  image: string;

  @Prop({
    type: String,
    required: true,
    uppercase: true,
    enum: ['FOOD', 'TOY', 'CLOTHES', 'ACCESSORIES', 'SERVICE', 'OTHER']
  })
  category: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);