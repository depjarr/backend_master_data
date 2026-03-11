import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"


export class CreatePresensiKhususDto {
    @IsNumber()
    @IsNotEmpty()
    periodeId: number;

    @IsDateString()
    @IsNotEmpty()
    tanggal: string;

    @IsString()
    @IsNotEmpty()
    jam_masuk: string;

    @IsString()
    @IsNotEmpty()
    jam_keluar: string;

    @IsString()
    @IsOptional()
    keterangan: string;
}
