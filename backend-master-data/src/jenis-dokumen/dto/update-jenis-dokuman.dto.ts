import { PartialType } from '@nestjs/mapped-types';
import { CreateJenisDokumanDto } from './create-jenis-dokuman.dto';

export class UpdateJenisDokumanDto extends PartialType(CreateJenisDokumanDto) {}
