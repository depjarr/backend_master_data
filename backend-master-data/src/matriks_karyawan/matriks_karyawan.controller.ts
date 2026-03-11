import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MatriksKaryawanService } from './matriks_karyawan.service';
import { CreateMatriksKaryawanDto } from './dto/create-matriks_karyawan.dto';
import { UpdateMatriksKaryawanDto } from './dto/update-matriks_karyawan.dto';

@Controller('matriks-karyawan')
export class MatriksKaryawanController {
  constructor(private readonly matriksKaryawanService: MatriksKaryawanService) {}

  @Post()
  create(@Body() createMatriksKaryawanDto: CreateMatriksKaryawanDto) {
    return this.matriksKaryawanService.create(createMatriksKaryawanDto);
  }

  @Get()
  findAll() {
    return this.matriksKaryawanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matriksKaryawanService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updateMatriksKaryawanDto: UpdateMatriksKaryawanDto) {
    return this.matriksKaryawanService.update(+id, updateMatriksKaryawanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matriksKaryawanService.remove(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMatriksKaryawanDto: UpdateMatriksKaryawanDto) {
    return this.matriksKaryawanService.update(+id, updateMatriksKaryawanDto);
  }
}
