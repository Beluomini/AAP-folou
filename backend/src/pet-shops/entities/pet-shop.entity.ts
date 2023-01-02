import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PetShopDocument = HydratedDocument<PetShop>;

@Schema()
export class PetShop {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  cnpj: string;

  @Prop()
  contact: string;

  @Prop()
  cep: string;

  @Prop()
  address: string;
}

export const PetShopSchema = SchemaFactory.createForClass(PetShop);