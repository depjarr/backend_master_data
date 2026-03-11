import { PartialType } from '@nestjs/mapped-types';
import { CreateAlasanKeluarDto } from './create-alasan-keluar.dto';

export class UpdateAlasanKeluarDto extends PartialType(CreateAlasanKeluarDto) {}
