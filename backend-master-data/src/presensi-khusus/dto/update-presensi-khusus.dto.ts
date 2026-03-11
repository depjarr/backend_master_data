import { PartialType } from '@nestjs/mapped-types';
import { CreatePresensiKhususDto } from './create-presensi-khusus.dto';

export class UpdatePresensiKhususDto extends PartialType(CreatePresensiKhususDto) {}
