import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PeriodePresensiKhususService } from './periode-presensi-khusus.service';
import { CreatePeriodePresensiKhususDto } from './dto/create-periode-presensi-khusus.dto';
import { UpdatePeriodePresensiKhususDto } from './dto/update-periode-presensi-khusus.dto';

@Controller('periode-presensi-khusus')
export class PeriodePresensiKhususController {
  constructor(private readonly periodePresensiKhususService: PeriodePresensiKhususService) {}

  @Post()
  create(@Body() createPeriodePresensiKhususDto: CreatePeriodePresensiKhususDto) {
    return this.periodePresensiKhususService.create(createPeriodePresensiKhususDto);
  }

  @Get()
  findAll() {
    return this.periodePresensiKhususService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.periodePresensiKhususService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updatePeriodePresensiKhususDto: UpdatePeriodePresensiKhususDto) {
    return this.periodePresensiKhususService.update(+id, updatePeriodePresensiKhususDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.periodePresensiKhususService.remove(+id);
  }

  @Put(':id')
  updatePut(@Param('id') id: string, @Body() updatePeriodePresensiKhususDto: UpdatePeriodePresensiKhususDto) {
    return this.periodePresensiKhususService.update(+id, updatePeriodePresensiKhususDto);
  }
}
