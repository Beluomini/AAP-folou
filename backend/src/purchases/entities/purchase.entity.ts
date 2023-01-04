import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PurchaseDocument = HydratedDocument<Purchase>;

@Schema()
export class Purchase {

  @Prop()
  id_pet_shop: string;

  @Prop()
  id_client: string;

  @Prop()
  id_order: string;

  @Prop()
  id_product: string;

  @Prop()
  quantity: string;

  @Prop()
  unit_price: string;

  @Prop()
  total_price: string;

  @Prop()
  description: string;
    
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);