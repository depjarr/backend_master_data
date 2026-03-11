import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MataUangService } from './mata-uang.service';
import { CreateMataUangDto } from './dto/create-mata-uang.dto';
import { UpdateMataUangDto } from './dto/update-mata-uang.dto';

@Controller('mata-uang')
export class MataUangController {
  constructor(private readonly mataUangService: MataUangService) {}

  @Post()
  create(@Body() createMataUangDto: CreateMataUangDto) {
    return this.mataUangService.create(createMataUangDto);
  }

  @Get()
  findAll() {
    return this.mataUangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mataUangService.findOne(+id);
  }

  @Patch(':id')
  updatePatch(@Param('id') id: string, @Body() updateMataUangDto: UpdateMataUangDto) {
    return this.mataUangService.update(+id, updateMataUangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mataUangService.remove(+id);
  }

  @Put(':id')
  updatePut(@Param('id') id: string, @Body() updateMataUangDto: UpdateMataUangDto) {
    return this.mataUangService.update(+id, updateMataUangDto);
  }
}
