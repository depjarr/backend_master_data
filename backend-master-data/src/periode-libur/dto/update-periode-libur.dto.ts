import { PartialType } from '@nestjs/mapped-types';
import { CreatePeriodeLiburDto } from './create-periode-libur.dto';

export class UpdatePeriodeLiburDto extends PartialType(CreatePeriodeLiburDto) {}
