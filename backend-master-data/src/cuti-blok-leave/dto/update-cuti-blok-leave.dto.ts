import { PartialType } from '@nestjs/mapped-types';
import { CreateCutiBlokLeaveDto } from './create-cuti-blok-leave.dto';

export class UpdateCutiBlokLeaveDto extends PartialType(CreateCutiBlokLeaveDto) {}
