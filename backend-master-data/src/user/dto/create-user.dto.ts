import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
import { Type } from 'class-transformer'; 

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'Password minimal 6 karakter' })
  password: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number) // Memastikan diconvert ke number
  agama_id?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  status_pernikahan_id?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  pekerjaan_id?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  jenjang_pendidikan_id?: number;
}