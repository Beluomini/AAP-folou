import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, unique: true })
  cpf: string;

  @Prop({})
  contact: string;

  @Prop({ required: true })
  cep: string;

  @Prop({ required: true })
  address: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);