import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStatusKehadiranDto {
  @IsString()
  @IsNotEmpty()
  status: string; 
}