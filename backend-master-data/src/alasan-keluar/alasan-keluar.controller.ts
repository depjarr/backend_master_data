import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AlasanKeluarService } from './alasan-keluar.service';
import { CreateAlasanKeluarDto } from './dto/create-alasan-keluar.dto';
import { UpdateAlasanKeluarDto } from './dto/update-alasan-keluar.dto';

@Controller('alasan-keluar')
export class AlasanKeluarController {
  constructor(private readonly alasanKeluarService: AlasanKeluarService) {}

  @Post()
  create(@Body() createAlasanKeluarDto: CreateAlasanKeluarDto) {
    return this.alasanKeluarService.create(createAlasanKeluarDto);
  }

  @Get()
  findAll() {
    return this.alasanKeluarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alasanKeluarService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updateAlasanKeluarDto: UpdateAlasanKeluarDto) {
    return this.alasanKeluarService.update(+id, updateAlasanKeluarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alasanKeluarService.remove(+id);
  }
  @Put(':id')
  updatePut(@Param('id') id: string, @Body() updateAlasanKeluarDto: UpdateAlasanKeluarDto) {
    return this.alasanKeluarService.update(+id, updateAlasanKeluarDto);
  }
}
