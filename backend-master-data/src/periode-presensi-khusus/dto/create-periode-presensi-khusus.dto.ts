import { IsNotEmpty, IsNumber } from "class-validator"

export class CreatePeriodePresensiKhususDto {
    @IsNumber()
    @IsNotEmpty()
    tahun: number;
}
