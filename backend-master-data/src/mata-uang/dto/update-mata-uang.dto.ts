import { PartialType } from '@nestjs/mapped-types';
import { CreateMataUangDto } from './create-mata-uang.dto';

export class UpdateMataUangDto extends PartialType(CreateMataUangDto) {}
