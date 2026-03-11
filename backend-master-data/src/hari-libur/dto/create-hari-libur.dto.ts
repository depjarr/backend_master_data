import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHariLiburDto {
    @IsString()
    @IsNotEmpty()
    tanggal: string;

    @IsString()
    @IsNotEmpty()
    keterangan: string;

    @IsNumber()
    @IsNotEmpty()
    periodeliburid: number;
}
