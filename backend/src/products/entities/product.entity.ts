import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {

  @Prop()
  fk_id_pet_shop: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  stock: number;

  @Prop()
  image: string;

  @Prop()
  category: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);