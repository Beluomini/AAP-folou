import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PetShopDocument = HydratedDocument<PetShop>;

@Schema()
export class PetShop {
  @Prop()
  nome: string;

  @Prop()
  email: string;

  @Prop()
  senha: string;

  @Prop()
  cnpj: string;

  @Prop()
  telefone: string;

  @Prop()
  cep: string;

  @Prop()
  endereco: string;
}

export const PetShopSchema = SchemaFactory.createForClass(PetShop);