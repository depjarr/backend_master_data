import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePeriodeLiburDto {
    @IsNumber()
    @IsNotEmpty()
    tahun: number;

    @IsString()
    @IsNotEmpty()
    deskripsi: string;
}
    