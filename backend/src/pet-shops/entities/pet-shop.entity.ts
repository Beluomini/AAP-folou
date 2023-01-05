import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PetShopDocument = HydratedDocument<PetShop>;

@Schema()
export class PetShop {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true })
  cnpj: string;

  @Prop()
  contact: string;

  @Prop({ required: true })
  cep: string;

  @Prop({ required: true })
  address: string;
}

export const PetShopSchema = SchemaFactory.createForClass(PetShop);