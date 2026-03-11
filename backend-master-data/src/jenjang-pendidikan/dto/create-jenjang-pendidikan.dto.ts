import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateJenjangPendidikanDto {
  @IsString()
  @IsNotEmpty()
  deskripsi: string;

  @IsNumber()
  @IsOptional() 
  urutan?: number; 
}