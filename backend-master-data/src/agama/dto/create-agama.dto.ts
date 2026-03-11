import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAgamaDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}