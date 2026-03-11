import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusPernikahanDto } from './create-status-pernikahan.dto';

export class UpdateStatusPernikahanDto extends PartialType(CreateStatusPernikahanDto) {}
