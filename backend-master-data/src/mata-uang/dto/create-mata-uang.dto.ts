import { IsNotEmpty, IsString, IsBoolean, IsOptional, MaxLength } from 'class-validator';

export class CreateMataUangDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(5, { message: 'Kode mata uang maksimal 3 karakter' })
    kode: string; 

    @IsString()
    @IsNotEmpty()
    @MaxLength(100, { message: 'Nama mata uang maksimal 100 karakter' })
    nama: string; 

    @IsString()
    @IsNotEmpty()
    @MaxLength(10, { message: 'Simbol mata uang maksimal 10 karakter' })
    simbol: string; 

    @IsBoolean()
    @IsOptional()
    default_kurs: boolean; 
}