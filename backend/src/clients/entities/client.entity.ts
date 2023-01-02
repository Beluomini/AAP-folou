import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  cpf: string;

  @Prop()
  contact: string;

  @Prop()
  cep: string;

  @Prop()
  address: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);