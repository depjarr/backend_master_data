import { PartialType } from '@nestjs/mapped-types';
import { CreateJenjangPendidikanDto } from './create-jenjang-pendidikan.dto';

export class UpdateJenjangPendidikanDto extends PartialType(CreateJenjangPendidikanDto) {}
