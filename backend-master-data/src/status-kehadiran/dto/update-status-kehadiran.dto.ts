import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusKehadiranDto } from './create-status-kehadiran.dto';

export class UpdateStatusKehadiranDto extends PartialType(CreateStatusKehadiranDto) {}
