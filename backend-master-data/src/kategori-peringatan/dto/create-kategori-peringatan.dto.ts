import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateKategoriPeringatanDto {
    @IsNotEmpty()
    @IsString()
    deskripsi: string;

    @IsOptional()
    @IsNumber()
    masa_berlaku: number;

    @IsNotEmpty()
    @IsNumber()
    pengurang: number;

    @IsNotEmpty()
    @IsNumber()
    id_pengurang_kompoten: number;

    @IsNotEmpty()
    @IsDateString()
    tanggal_efektif: string;
}
