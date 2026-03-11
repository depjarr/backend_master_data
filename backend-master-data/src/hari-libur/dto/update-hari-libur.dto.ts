import { PartialType } from '@nestjs/mapped-types';
import { CreateHariLiburDto } from './create-hari-libur.dto';

export class UpdateHariLiburDto extends PartialType(CreateHariLiburDto) {}
