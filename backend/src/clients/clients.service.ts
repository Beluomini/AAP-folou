import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client, ClientDocument } from './entities/client.entity';

@Injectable()
export class ClientsService {

  constructor(@InjectModel(Client.name) private clientModel: Model<ClientDocument>) {}
  
  async create(createClientDto: CreateClientDto) {
    const Client = new this.clientModel(createClientDto);

    const cpf = createClientDto.cpf;
    const clientCpfExists = await this.clientModel.findOne({ cpf });
    if (clientCpfExists) {
      throw new HttpException(
        'O cpf já está sendo usado',
        HttpStatus.BAD_REQUEST,
      );
    }

    return Client.save();
  }

  findAll() {
    return this.clientModel.find();
  }

  async findOne(id: string) {

    if(!isValidObjectId(id)){
      throw new HttpException(
        'Chave do cliente inválida',
        HttpStatus.BAD_REQUEST,
      );
    }else{
      const client = await this.clientModel.findOne({ _id: id });
      if(!client){
        throw new HttpException(
          'Cliente com a chave informada não existe',
          HttpStatus.NOT_FOUND,
        );
      }
    }
    
    return this.clientModel.findById(id);
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    
    const client = await this.clientModel.findOne({ _id: id });
    if(!client){
      throw new HttpException(
        'Cliente com a chave informada não existe',
        HttpStatus.NOT_FOUND,
      );
    }

    const cpf = updateClientDto.cpf;
    const clientCpfExists = await this.clientModel.findOne({ cpf });
    if (clientCpfExists) {
      throw new HttpException(
        'O cpf já está sendo usado',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.clientModel.findByIdAndUpdate({
      _id: id
    },{
      $set: updateClientDto,
    },{
      new: true
    });
  }

  async remove(id: string) {
    
    const client = await this.clientModel.findOne({ _id: id });
    if(!client){
      throw new HttpException(
        'Cliente com a chave informada não existe',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.clientModel.deleteOne({ _id: id }).exec();
  }
}
