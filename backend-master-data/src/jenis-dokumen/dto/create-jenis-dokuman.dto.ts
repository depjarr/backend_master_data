import { IsBoolean, IsDefined, IsNotEmpty, IsOptional, IsString} from "class-validator";
export class CreateJenisDokumanDto {
    @IsString()
    @IsNotEmpty()
    deskripsi: string;

    @IsOptional()
    @IsBoolean()
    isActive: boolean = true;
}
    