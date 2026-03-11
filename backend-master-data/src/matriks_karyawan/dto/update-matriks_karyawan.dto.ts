import { PartialType } from '@nestjs/mapped-types';
import { CreateMatriksKaryawanDto } from './create-matriks_karyawan.dto';

export class UpdateMatriksKaryawanDto extends PartialType(CreateMatriksKaryawanDto) {}
