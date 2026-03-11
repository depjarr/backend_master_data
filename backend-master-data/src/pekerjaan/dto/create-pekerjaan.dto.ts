import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePekerjaanDto {
    @IsNotEmpty()
    @IsString()
    deskripsi: string;
}
