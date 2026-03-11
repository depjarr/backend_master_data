import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePengurangKompetenKinerjaDto {
    @IsNotEmpty()
    @IsString()
    deskripsi: string;
}