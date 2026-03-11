import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStatusPernikahanDto {
  @IsString()
  @IsNotEmpty()
  deskripsi: string;
}


