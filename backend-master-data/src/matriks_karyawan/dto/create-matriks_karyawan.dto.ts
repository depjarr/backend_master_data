import { Type } from 'class-transformer';
import { IsNotEmpty, IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateMatriksKaryawanDto {
    @IsNumber()
    @IsNotEmpty()
    karyawanId: number;

    @IsString()
    @IsNotEmpty()
    nama: string;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    biodata: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    keluarga_karyawan: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    tempat_tinggal: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    status_pernikahan: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    kartu_identitas: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    pendidikan: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    bahasa: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    saudara_karyawan: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    training: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    rekening: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    pengalaman: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    tunjangan: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    status_karyawan: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    masa_jabatan: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    beasiswa: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    fingerprint: boolean;

    @IsBoolean()
    @IsOptional()
    @Type(() => Boolean)
    peringatan: boolean;

}
