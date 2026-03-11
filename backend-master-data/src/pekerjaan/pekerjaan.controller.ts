import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PekerjaanService } from './pekerjaan.service';
import { CreatePekerjaanDto } from './dto/create-pekerjaan.dto';
import { UpdatePekerjaanDto } from './dto/update-pekerjaan.dto';

@Controller('pekerjaan')
export class PekerjaanController {
  constructor(private readonly pekerjaanService: PekerjaanService) {}

  @Post()
  create(@Body() createPekerjaanDto: CreatePekerjaanDto) {
    return this.pekerjaanService.create(createPekerjaanDto);
  }

  @Get()
  findAll() {
    return this.pekerjaanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pekerjaanService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updatePekerjaanDto: UpdatePekerjaanDto) {
    return this.pekerjaanService.update(+id, updatePekerjaanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pekerjaanService.remove(+id);
  }

  @Put(':id')
  updatePut(@Param('id') id: string, @Body() updatePekerjaanDto: UpdatePekerjaanDto) {
    return this.pekerjaanService.update(+id, updatePekerjaanDto);
  }
}
