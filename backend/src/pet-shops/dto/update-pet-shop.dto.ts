import { PartialType } from '@nestjs/mapped-types';
import { CreatePetShopDto } from './create-pet-shop.dto';

export class UpdatePetShopDto extends PartialType(CreatePetShopDto) {}
