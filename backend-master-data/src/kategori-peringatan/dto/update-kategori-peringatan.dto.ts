import { PartialType } from '@nestjs/mapped-types';
import { CreateKategoriPeringatanDto } from './create-kategori-peringatan.dto';

export class UpdateKategoriPeringatanDto extends PartialType(CreateKategoriPeringatanDto) {}
