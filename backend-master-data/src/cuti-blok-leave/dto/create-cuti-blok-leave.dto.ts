import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCutiBlokLeaveDto {
    @IsString()
    @IsNotEmpty()
    deskripsi: string;

    @IsNumber()
    @IsNotEmpty()
    jumlah_hari: number;

    @IsDateString() 
    @IsNotEmpty()
    tanggal_efektif: string; 
}