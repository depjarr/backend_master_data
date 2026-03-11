import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAlasanKeluarDto {
  @IsNotEmpty()
  @IsString()
  nama: string;
}
