import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { HariLiburService } from './hari-libur.service';
import { CreateHariLiburDto } from './dto/create-hari-libur.dto';
import { UpdateHariLiburDto } from './dto/update-hari-libur.dto';

@Controller('hari-libur')
export class HariLiburController {
  constructor(private readonly hariLiburService: HariLiburService) {}

  @Post()
  create(@Body() createHariLiburDto: CreateHariLiburDto) {
    return this.hariLiburService.create(createHariLiburDto);
  }

  @Get()
  findAll() {
    return this.hariLiburService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hariLiburService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updateHariLiburDto: UpdateHariLiburDto) {
    return this.hariLiburService.update(+id, updateHariLiburDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hariLiburService.remove(+id);
  }

  @Put(':id')
  updatePut(@Param('id') id: string, @Body() updateHariLiburDto: UpdateHariLiburDto) {
    return this.hariLiburService.update(+id, updateHariLiburDto); 
  }
}
