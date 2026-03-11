import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { JenjangPendidikanService } from './jenjang-pendidikan.service';
import { CreateJenjangPendidikanDto } from './dto/create-jenjang-pendidikan.dto';
import { UpdateJenjangPendidikanDto } from './dto/update-jenjang-pendidikan.dto';

@Controller('jenjang-pendidikan')
export class JenjangPendidikanController {
  constructor(private readonly jenjangPendidikanService: JenjangPendidikanService) {}

  @Post()
  create(@Body() createJenjangPendidikanDto: CreateJenjangPendidikanDto) {
    return this.jenjangPendidikanService.create(createJenjangPendidikanDto);
  }

  @Get()
  findAll() {
    return this.jenjangPendidikanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jenjangPendidikanService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updateJenjangPendidikanDto: UpdateJenjangPendidikanDto) {
    return this.jenjangPendidikanService.update(+id, updateJenjangPendidikanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jenjangPendidikanService.remove(+id);
  }

  @Put(':id')
  updatePut(@Param('id') id: string, @Body() updateJenjangPendidikanDto: UpdateJenjangPendidikanDto) {
    return this.jenjangPendidikanService.update(+id, updateJenjangPendidikanDto);
  }
}
