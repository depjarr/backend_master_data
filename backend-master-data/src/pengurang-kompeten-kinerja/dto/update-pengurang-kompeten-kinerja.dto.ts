import { PartialType } from '@nestjs/mapped-types';
import { CreatePengurangKompetenKinerjaDto } from './create-pengurang-kompeten-kinerja.dto';

export class UpdatePengurangKompetenKinerjaDto extends PartialType(CreatePengurangKompetenKinerjaDto) {}
