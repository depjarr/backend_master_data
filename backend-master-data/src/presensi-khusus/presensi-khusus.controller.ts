import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PresensiKhususService } from './presensi-khusus.service';
import { CreatePresensiKhususDto } from './dto/create-presensi-khusus.dto';
import { UpdatePresensiKhususDto } from './dto/update-presensi-khusus.dto';

@Controller('presensi-khusus')
export class PresensiKhususController {
  constructor(private readonly presensiKhususService: PresensiKhususService) {}

  @Post()
  create(@Body() createPresensiKhususDto: CreatePresensiKhususDto) {
    return this.presensiKhususService.create(createPresensiKhususDto);
  }

  @Get()
  findAll() {
    return this.presensiKhususService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presensiKhususService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updatePresensiKhususDto: UpdatePresensiKhususDto) {
    return this.presensiKhususService.update(+id, updatePresensiKhususDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presensiKhususService.remove(+id);
  }

  @Put(':id')
  updatePut(@Param('id') id: string, @Body() updateDto: UpdatePresensiKhususDto) {
    return this.presensiKhususService.update(+id, updateDto);
  }
}
