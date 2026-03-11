import { PartialType } from '@nestjs/mapped-types';
import { CreatePeriodePresensiKhususDto } from './create-periode-presensi-khusus.dto';

export class UpdatePeriodePresensiKhususDto extends PartialType(CreatePeriodePresensiKhususDto) {}
